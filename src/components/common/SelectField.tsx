"use client";
import * as React from "react";
import { Label } from "@/components/ui/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { SelectFieldProps } from "@/constants/interfaces";
import { cn } from "@/lib/utils";

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  placeholder = "Select an option",
  options = [],
  value,
  onChange,
  disabled = false,
  className,
  selectClassName,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const controlledValue = value ?? "";

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <Label className="text-sm font-medium">{label}</Label>}

      <NativeSelect
        value={controlledValue}
        onChange={handleChange}
        disabled={disabled}
        className={selectClassName}
        aria-label={label ?? placeholder}
      >
        {placeholder && (
          <NativeSelectOption value="" disabled hidden>
            {placeholder}
          </NativeSelectOption>
        )}

        {options.map((option) => (
          <NativeSelectOption key={option.value} value={option.value}>
            {option.label}
          </NativeSelectOption>
        ))}
      </NativeSelect>
    </div>
  );
};

export default SelectField;
