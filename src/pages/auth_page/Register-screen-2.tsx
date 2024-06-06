import InputComponent from "./components/InputComponent";

const Register2 = () => {

  return (
    <div>
      <div className="flex justify-between ">
        <p className="text-md">Store Information</p>
        <p className="text-sm">Step 2 of 2</p>
      </div>
      <div className="pt-10 flex flex-col gap-y-3">
        <InputComponent label="Store Name" type="text" name={"store_name"} />
        <div className="flex gap-x-5 items-end">
          <InputComponent label="Contact Information" type="text" name={"first_name"} />
          <InputComponent
            label=""
            type="text"
            name={"last_name"}
          />
        </div>
        <InputComponent label="Phone" type="text" name={"phone"} />
        <InputComponent label="Address" type="text" name={"address"} />
        <InputComponent label="State" type="text" name={"state"} />
        <InputComponent label="Country" type="text" name={"country"} />
      </div>
      <p className="text-center mt-7 text-sm">
        By signing up, you agree to the MPOS{" "}
        <span className="text-[#FB0D0D]">Terms of Service,</span> Privacy and
        Cookie Notice.
      </p>
    </div>
  );
};

export default Register2;
