import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";

type Props = {
  label: string;
  type: string;
  name?: string;
};

const InputComponent = ({ label, type, name }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <label className="text-[12px] font-bold">{label}</label>
        {type === "password" && (
          <Button
            variant={"ghost"}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            type="button"
          >
            {showPassword ? (
              <EyeOffIcon className=" text-[#CBD2E0]" />
            ) : (
              <EyeIcon className=" text-[#CBD2E0]" />
            )}
          </Button>
        )}
      </div>
      <Input
        type={showPassword ? "text" : type}
        className="rounded border-[#CBD2E0]"
        autoComplete="off"
        name={name}
      />
    </div>
  );
};

export default InputComponent;
