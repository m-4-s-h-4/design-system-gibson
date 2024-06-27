import React from "react";
import { SpacingSpacing1 } from "../../../../tokens/js/variables";
import Stack from "../../../LayoutComponents/Stack/Stack";
import HelpText from "../../HelpText/HelpText";
import Label from "../../../Label/Label";
import StyledInput from "./StyledInput";

/**
 * Props for the Input component.
 */
export interface InputProps {
  /**
   * The placeholder text for the input field.
   */
  placeholder: string;

  /**
   * Indicates whether the input field has an error.
   * @default false
   */
  error?: boolean;

  /**
   * The error message to display when the input field has an error.
   */
  errorMessage?: string;

  /**
   * The type of the input field.
   * Can be 'number' or 'text'.
   * @default "text"
   */
  type?: "number" | "text";

  /**
   * The variant of the help text.
   * Can be 'default', 'warning', or 'success'.
   * @default "default"
   */
  helpTextVariant?: "default" | "warning" | "success";

  /**
   * The content of the help text.
   */
  helpTextChildren?: React.ReactNode;

  /**
   * The label for the input field.
   */
  label?: string;

  /**
   * Indicates whether to show the label.
   * @default true
   */
  showLabel?: boolean;

  /**
   * Indicates whether to show the help text.
   * @default true
   */
  showHelpText?: boolean;

  /**
   * Indicates whether the input field is required.
   * @default false
   */
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
