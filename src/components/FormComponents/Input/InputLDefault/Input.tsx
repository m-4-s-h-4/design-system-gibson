import React from "react";
import { SpacingSpacing1 } from "../../../../tokens/js/variables";
import Stack from "../../../LayoutComponents/Stack/Stack";
import HelpText from "../../HelpText/HelpText";
import Label from "../../../Label/Label";
import StyledInput from "./StyledInput";

export interface InputProps {
  placeholder: string;
  error?: boolean;
  errorMessage?: string;
  type?: "number" | "text";
  helpTextVariant?: "default" | "warning" | "success";
  helpTextChildren?: React.ReactNode;
  label?: string;
  showLabel?: boolean;
  showHelpText?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  error = false,
  errorMessage = "Please enter a valid email.",
  type = "text",
  helpTextVariant = "default",
  helpTextChildren = "Please enter email connected to the account.",
  label = "Label",
  showLabel = true,
  showHelpText = true,
  required = false,
}) => {
  return (
    <Stack spacing={SpacingSpacing1}>
      {showLabel && <Label required={required}>{label}</Label>}
      <StyledInput
        placeholder={placeholder}
        aria-invalid={error}
        isError={error}
        type={type}
      />
      {showHelpText && (
        <HelpText variant={error ? "error" : helpTextVariant}>
          {error ? errorMessage : helpTextChildren}
        </HelpText>
      )}
    </Stack>
  );
};

export default Input;
