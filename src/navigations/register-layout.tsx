import { Button } from "@/components/ui/button";
import { Form, Link, Outlet, useLocation, useParams } from "react-router-dom";

const RegisterLayout = () => {
  const isStep1 = useLocation().pathname === "/signup/step-1";
  const isStep2 = useLocation().pathname === "/signup/step-2";
  const params = useParams();
  const uid = params.uid;
  const isSuccessPage = useLocation().pathname === `/signup/completed/${uid}`;
  return (
    <Form
      className="py-10 flex flex-col items-center"
      action={isStep1 ? "/signup/step-2/:uid" : `/signup/completed/${uid}`}
      method="POST"
    >
      {!isSuccessPage && (
        <div className="text-center">
          <h1 className="md:text-4xl text-2xl font-bold">
            Let's Create your account
          </h1>
          <p className="mt-5 md:text-sm text-xs">
            Signing up on MPOS is fast and free--No credit card required, no
            commitments or long-term contracts.
          </p>
        </div>
      )}
      <div className="py-10 md:w-[50%] w-full px-3">
        <Outlet />
      </div>
      {!isSuccessPage && (
        <>
          <div className="flex gap-x-3">
            <Link to={isStep2 ? "/signup/step-1" : "/"}>
              <Button
                variant={"outline"}
                size={"lg"}
                className="rounded"
                type={"button"}
              >
                Back
              </Button>
            </Link>
            {/* <Link to={isStep1 ? "/signup/step-2" : "/dashboard"}> */}
            <Button size={"lg"} className="rounded" type={"submit"}>
              {isStep1 ? "Next" : "Activate"}
            </Button>
            {/* </Link> */}
          </div>
          <p className="mt-5 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-bold">
              Sign in
            </Link>
          </p>
        </>
      )}
    </Form>
  );
};

export default RegisterLayout;
