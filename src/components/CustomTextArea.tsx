import React from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CustomTextAreaProps } from "@/constants/interfaces";

const CustomTextArea: React.FC<CustomTextAreaProps> = ({
  label,
  id,
  placeholder,
  value,
  onChange,
  onBlur,
  disabled = false,
  className,
  error,
  rows = 4,
  textareaClassName,
  name,
  ref,
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id} className="text-sm">
        {label}
        {error && <span className="text-red-500 text-sm">({error})</span>}
      </Label>
      <Textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        rows={rows}
        ref={ref}
        className={cn(
          error && "border-red-500 focus-visible:border-red-500",
          textareaClassName
        )}
      />
    </div>
  );
};

export default CustomTextArea;
