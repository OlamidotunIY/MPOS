import InputComponent from "./components/InputComponent";

const Register = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <p className="text-md">Personal Information</p>
        <p className="text-sm">Step 1 of 2</p>
      </div>
      <div className="pt-10 flex flex-col gap-y-3">
        <InputComponent label="Email" type="email" name={"email"} />
        <InputComponent label="Password" type="password" name={"password"} />
        <InputComponent label="Conform Password" type="password" name={"confirmPassword"} />
      </div>
      <p className="text-center mt-7 text-sm">
        By signing up, you agree to the MPOS <span className="text-[#FB0D0D]">Terms of Service,</span> Privacy and
        Cookie Notice.
      </p>
    </div>
  );
};

export default Register;
