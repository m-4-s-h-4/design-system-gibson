import React from "react";
import styled from "styled-components";
import {
  TokensColorButtonPrimaryDefault,
  TokensColorButtonPrimaryHover,
  TokensColorButtonPrimaryText,
  TokensColorButtonSecondaryDefault,
  TokensColorButtonSecondaryHover,
  TokensColorButtonSecondaryText,
  TokensColorButtonDisabledDefault,
  TokensColorButtonDisabledText,
  TokensColorGrayscaleBlack900,
  SpacingSpacing3,
  SpacingSpacing10,
  ButtonFontFamily,
  ButtonFontWeight,
  ButtonLineHeight,
  ButtonFontSize,
  ButtonLetterSpacing,
  ParagraphSpacing0,
  ParagraphIndent0,
  ButtonTextCase,
  ButtonTextDecoration,
  FontSizeMediumIcon,
  TokensColorIconPrimaryColor,
  SpacingSpacing2,
} from "../../tokens/js/variables";
import Next from "../icons/Next";
import iconComponents from "../icons/iconMapping";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "iconOnly";
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: boolean;
  iconType?: keyof typeof iconComponents;
}

const variantStyles = {
  primary: {
    backgroundColor: TokensColorButtonPrimaryDefault,
    color: TokensColorButtonPrimaryText,
    padding: `${SpacingSpacing3} ${SpacingSpacing10}`,
    fontFamily: ButtonFontFamily,
    fontWeight: ButtonFontWeight,
    lineHeight: ButtonLineHeight,
    fontSize: ButtonFontSize,
    letterSpacing: ButtonLetterSpacing,
    paragraphSpacing: ParagraphSpacing0,
    paragraphIndent: ParagraphIndent0,
    textCase: ButtonTextCase,
    textDecoration: ButtonTextDecoration,
  },
  secondary: {
    backgroundColor: TokensColorButtonSecondaryDefault,
    color: TokensColorButtonSecondaryText,
    padding: `${SpacingSpacing3} ${SpacingSpacing10}`,
    fontFamily: ButtonFontFamily,
    fontWeight: ButtonFontWeight,
    lineHeight: ButtonLineHeight,
    fontSize: ButtonFontSize,
    letterSpacing: ButtonLetterSpacing,
    paragraphSpacing: ParagraphSpacing0,
    paragraphIndent: ParagraphIndent0,
    textCase: ButtonTextCase,
    textDecoration: ButtonTextDecoration,
  },
  disabled: {
    backgroundColor: TokensColorButtonDisabledDefault,
    color: TokensColorButtonDisabledText,
    padding: `${SpacingSpacing3} ${SpacingSpacing10}`,
    fontFamily: ButtonFontFamily,
    fontWeight: ButtonFontWeight,
    lineHeight: ButtonLineHeight,
    fontSize: ButtonFontSize,
    letterSpacing: ButtonLetterSpacing,
    paragraphSpacing: ParagraphSpacing0,
    paragraphIndent: ParagraphIndent0,
    textCase: ButtonTextCase,
    textDecoration: ButtonTextDecoration,
  },
  iconOnly: {
    backgroundColor: "transparent",
    color: TokensColorGrayscaleBlack900,
    padding: "0",
    fontFamily: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
    fontSize: "inherit",
    letterSpacing: "inherit",
    paragraphSpacing: "inherit",
    paragraphIndent: "inherit",
    textCase: "none",
    textDecoration: "none",
  },
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "iconOnly"
      ? "transparent"
      : props.disabled
        ? variantStyles.disabled.backgroundColor
        : props.variant
          ? variantStyles[props.variant].backgroundColor
          : variantStyles.primary.backgroundColor};
  color: ${(props) =>
    props.variant === "iconOnly"
      ? TokensColorGrayscaleBlack900
      : props.disabled
        ? variantStyles.disabled.color
        : props.variant
          ? variantStyles[props.variant].color
          : variantStyles.primary.color};
  padding: ${(props) =>
    props.variant === "iconOnly"
      ? "0"
      : props.disabled
        ? variantStyles.disabled.padding
        : props.variant
          ? variantStyles[props.variant].padding
          : variantStyles.primary.padding};
  font-family: ${(props) =>
    props.variant === "iconOnly"
      ? "inherit"
      : props.disabled
        ? variantStyles.disabled.fontFamily
        : props.variant
          ? variantStyles[props.variant].fontFamily
          : variantStyles.primary.fontFamily};
  font-weight: ${(props) =>
    props.variant === "iconOnly"
      ? "inherit"
      : props.disabled
        ? variantStyles.disabled.fontWeight
        : props.variant
          ? variantStyles[props.variant].fontWeight
          : variantStyles.primary.fontWeight};
  line-height: ${(props) =>
    props.variant === "iconOnly"
      ? "inherit"
      : props.disabled
        ? variantStyles.disabled.lineHeight
        : props.variant
          ? variantStyles[props.variant].lineHeight
          : variantStyles.primary.lineHeight};
  font-size: ${(props) =>
    props.variant === "iconOnly"
      ? "inherit"
      : props.disabled
        ? variantStyles.disabled.fontSize
        : props.variant
          ? variantStyles[props.variant].fontSize
          : variantStyles.primary.fontSize};
  letter-spacing: ${(props) =>
    props.variant === "iconOnly"
      ? "inherit"
      : props.disabled
        ? variantStyles.disabled.letterSpacing
        : props.variant
          ? variantStyles[props.variant].letterSpacing
          : variantStyles.primary.letterSpacing};
  text-transform: ${(props) =>
    props.variant === "iconOnly"
      ? "none"
      : props.disabled
        ? variantStyles.disabled.textCase
        : props.variant
          ? variantStyles[props.variant].textCase
          : variantStyles.primary.textCase};
  text-decoration: ${(props) =>
    props.variant === "iconOnly"
      ? "none"
      : props.disabled
        ? variantStyles.disabled.textDecoration
        : props.variant
          ? variantStyles[props.variant].textDecoration
          : variantStyles.primary.textDecoration};
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.children && props.icon ? SpacingSpacing2 : "0")};

  &:hover {
    background-color: ${(props) =>
      props.variant === "iconOnly"
        ? "transparent"
        : props.disabled
          ? variantStyles.disabled.backgroundColor
          : props.variant === "secondary"
            ? TokensColorButtonSecondaryHover
            : TokensColorButtonPrimaryHover};
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  disabled = false,
  icon = false,
  iconType = "Next",
}) => {
  let iconColor;

  if (variant === "iconOnly") {
    iconColor = disabled
      ? TokensColorButtonDisabledDefault
      : TokensColorIconPrimaryColor;
  } else {
    iconColor = TokensColorButtonPrimaryText;
  }

  const IconComponent = iconComponents[iconType] || Next;

  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      icon={icon}
    >
      {children}
      {icon && IconComponent && (
        <IconComponent size={FontSizeMediumIcon} color={iconColor} />
      )}
    </StyledButton>
  );
};

export default Button;
