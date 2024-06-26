import React from "react";
import styled from "styled-components";
import {
  SpacingSpacing3,
  SpacingSpacing2,
  SpacingSpacing11,
  TokensInputBackgroundDefault,
  TokensInputPlaceholderDefault,
  TokensInputPlaceholderHover,
  TokensInputPlaceholderText,
  TokensInputPlaceholderError,
  BodyMediumFontFamily,
  BodyMediumFontWeight,
  BodyMediumLineHeight,
  BodyMediumFontSize,
  BodyMediumLetterSpacing,
  BodyMediumParagraphSpacing,
  BodyMediumTextDecoration,
  BodyMediumTextCase,
  SpacingSpacing1,
} from "../../../../tokens/js/variables";
import Stack from "../../../LayoutComponents/Stack/Stack";
import HelpText from "../../HelpText/HelpText";
import Label from "../../../Label/Label";

const StyledInput = styled.input<{ isError: boolean }>`
  width: 320px;
  padding: ${SpacingSpacing2} ${SpacingSpacing11} ${SpacingSpacing2}
    ${SpacingSpacing3};
  background-color: ${TokensInputBackgroundDefault};
  color: ${(props) =>
    props.isError ? TokensInputPlaceholderError : TokensInputPlaceholderText};
  border: ${(props) =>
    props.isError ? `1px solid ${TokensInputPlaceholderError}` : "transparent"};
  box-sizing: border-box;
  font-family: ${BodyMediumFontFamily};
  font-weight: ${BodyMediumFontWeight};
  line-height: ${BodyMediumLineHeight};
  font-size: ${BodyMediumFontSize};
  letter-spacing: ${BodyMediumLetterSpacing};
  margin-bottom: ${BodyMediumParagraphSpacing};
  text-decoration: ${BodyMediumTextDecoration};
  text-transform: ${BodyMediumTextCase};
  transition: border-color 0.3s ease;

  &::placeholder {
    font-family: ${BodyMediumFontFamily};
    font-weight: ${BodyMediumFontWeight};
    line-height: ${BodyMediumLineHeight};
    font-size: ${BodyMediumFontSize};
    letter-spacing: ${BodyMediumLetterSpacing};
    text-decoration: ${BodyMediumTextDecoration};
    text-transform: ${BodyMediumTextCase};
    color: ${(props) =>
      props.isError
        ? TokensInputPlaceholderError
        : TokensInputPlaceholderDefault};
  }

  &:hover::placeholder {
    color: ${(props) =>
      props.isError
        ? TokensInputPlaceholderError
        : TokensInputPlaceholderHover};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.isError ? TokensInputPlaceholderError : TokensInputPlaceholderText};
  }

  &[aria-invalid="true"] {
    border-color: ${TokensInputPlaceholderError};
  }
`;

export interface InputProps {
  placeholder: string;
  error?: boolean;
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
          {error ? "Please enter a valid email." : helpTextChildren}
        </HelpText>
      )}
    </Stack>
  );
};

export default Input;
