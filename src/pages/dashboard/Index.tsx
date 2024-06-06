import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { Cookies } from "react-cookie";
import { redirect, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const navigation = useNavigate();

  useEffect(() => {
    if (!token) {
      redirect("/login");
    }
  }, []);

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col gap-y-10 p-10">
      <h1 className="text-2xl text-center">
        Welcome!, Click the button below to
        log out.
      </h1>
      <Button
        variant="default"
        size="lg"
        onClick={async () => {
          signOut(auth)
            .then(async () => {
              if (token) {
                cookies.set("token", "", {
                  path: "/",
                });
                navigation("/login");
              }
              console.log("Sign out successful");
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        Log Out
      </Button>
    </div>
  );
};

export default Dashboard;
