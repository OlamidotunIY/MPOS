import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
} from "react-router-dom";
import Home from "../pages/landing_page";
import { Cookies } from "react-cookie";
import Register from "../pages/auth_page/Register-screen-1";
import Login from "../pages/auth_page/Login";
import Dashboard from "../pages/dashboard/Index";
import Layout from "./layout";
import Register2 from "@/pages/auth_page/Register-screen-2";
import RegisterLayout from "./register-layout";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Bounce, toast } from "react-toastify";
import { auth, db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import SuccesfulRegistration from "@/pages/auth_page/successful-registration";

export const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          path="/"
          element={<Layout />}
          loader={() => {
            const cookies = new Cookies();
            const token = cookies.get("token");
            if (token) {
              return redirect("/dashboard");
            } else {
              return <Layout />;
            }
          }}
        >
          <Route path="/" element={<Home />} index />
          <Route
            path="/login"
            element={<Login />}
            action={async ({ request }) => {
              const formData = await request.formData();
              const email = formData.get("email") as string;
              const password = formData.get("password") as string;
              const fields = Boolean(email && password);
              if (!fields) {
                toast("Email and Password required", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                });
                return redirect("/login");
              } else {
                try {
                  const user = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                  );
                  const expirationTime = (await user.user?.getIdTokenResult())
                    .expirationTime;
                  const expirationDate = new Date(expirationTime);
                  console.log(user);
                  const cookies = new Cookies();
                  cookies.set("token", user.user.getIdToken(), {
                    path: "/",
                    expires: expirationDate,
                  });

                  return redirect("/dashboard");
                } catch (error) {
                  toast("There is an error, please retry", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
                  console.log(error);
                  return redirect("/login");
                }
              }
            }}
          />
          <Route path="/signup" element={<RegisterLayout />}>
            <Route path="/signup/step-1" element={<Register />} index />
            <Route
              path="/signup/step-2/:uid"
              element={<Register2 />}
              action={async ({ request }) => {
                try {
                  const formData = await request.formData();
                  const email = formData.get("email") as string;
                  const password = formData.get("password") as string;
                  const confirmPassword = formData.get("confirmPassword");
                  let userCredential;
                  if (password !== confirmPassword) {
                    toast("Mismatch password", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });
                    return redirect("/signup/step-1");
                  } else {
                    userCredential = await createUserWithEmailAndPassword(
                      auth,
                      email,
                      password
                    );
                    await sendEmailVerification(
                      userCredential.user
                    );
                    return redirect(
                      `/signup/step-2/${userCredential.user?.uid}`
                    );
                  }
                } catch (error: any) {
                  console.log(error);
                  if (error.code === "auth/email-already-in-use") {
                    toast("Email already in use", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });
                  } else {
                    toast("There is an error, please retry", {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });
                  }
                  return redirect("/signup/step-1");
                }
              }}
            />
            <Route
              path="/signup/completed/:uid"
              element={<SuccesfulRegistration />}
              action={async ({ request, params }) => {
                const { uid } = params as { uid: string };

                const formData = await request.formData();
                const storeName = formData.get("store_name") as string;
                const firstName = formData.get("first_name") as string;
                const lastName = formData.get("last_name") as string;
                const phone = formData.get("phone") as string;
                const address = formData.get("address") as string;
                const state = formData.get("state") as string;
                const country = formData.get("country") as string;
                const allFields = Boolean(
                  storeName &&
                    firstName &&
                    lastName &&
                    phone &&
                    address &&
                    state &&
                    country
                );
                if (!allFields) {
                  toast("All fields are required", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
                  return redirect(`/signup/step-2/${uid}`);
                } else {
                  await setDoc(doc(db, "users", uid), {
                    storeName,
                    firstName,
                    lastName,
                    phone,
                    address,
                    state,
                    country,
                  });

                  return redirect(`/signup/completed/${uid}`);
                }
              }}
            />
          </Route>
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
