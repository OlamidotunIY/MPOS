import { Form, Link } from "react-router-dom";
import InputComponent from "./components/InputComponent";
import { Button } from "@/components/ui/button";

const Login = () => {


  return (
    <Form method="POST" className="w-full min-h-full flex items-center justify-center flex-col">
      <div className="w-[75%] pt-5 flex items-center justify-center flex-col">
        <h1 className="md:text-5xl text-3xl text-center font-bold">
          Welcome back! Sign in to your account.
        </h1>
        <div className="md:py-16 py-10 md:w-[60%] w-full ">
          <div className="flex flex-col gap-8 mb-5">
            <InputComponent label="Email" type="email" name="email" />
            <InputComponent label="Password" type="password" name="password" />
          </div>
          <Link to={""} className="text-[16px] font-bold">
            Forget password?
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <Button
          className="rounded md:w-[300px] w-[200px]"
          variant={"default"}
          size={"lg"}
        >
          Log in
        </Button>
        <p>
          New here?{" "}
          <Link to={"/signup/step-1"} className="font-bold">
            Register.
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default Login;
