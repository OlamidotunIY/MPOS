import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SuccesfulRegistration = () => {
  return (
    <div className="flex flex-col gap-y-14 justify-center items-center">
      <h1 className="text-center text-5xl text-primary font-bold">
        You're almost there!
      </h1>
      <div className="">
        <Alert variant={"default"} className="bg-secondary">
          <AlertDescription className="text-center font-medium">
            We have sent you an email with a verification link. To have access
            to your account, kindly verify your email address.{" "}
          </AlertDescription>
        </Alert>
      </div>
      <div className="">
        <Link to="/login">
          <Button
            type="button"
            className="px-20"
            variant={"default"}
            size={"lg"}
          >
            Log in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccesfulRegistration;
