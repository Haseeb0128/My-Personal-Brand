import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { InputFieldProps } from "@/constants/interfaces";

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  disabled = false,
  className,
  error,
  name,
  ref,
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id} className="text-sm">
        {label}
        {error && <span className="text-red-500 text-sm">({error})</span>}
      </Label>
      <Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        ref={ref}
        className={cn(error && "border-red-500 focus-visible:border-red-500")}
      />
    </div>
  );
};

export default InputField;
