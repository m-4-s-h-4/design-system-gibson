import styled from "styled-components";
import "../../tokens/css/_variables.css";

export interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
}

const variantStyles = {
  primary: {
    backgroundColor: "var(--tokens-color-button-primary-default)",
    color: "var(--tokens-color-button-primary-text)",
    padding: "var(--spacing-spacing-3) var(--spacing-spacing-10)",
    fontFamily: "var(--button-font-family)",
    fontWeight: "var(--button-font-weight)",
    lineHeight: "var(--button-line-height)",
    fontSize: "var(--button-font-size)",
    letterSpacing: "var(--button-letter-spacing)",
    paragraphSpacing: "var(--button-paragraph-spacing)",
    paragraphIndent: "var(--button-paragraph-indent)",
    textCase: "var(--button-text-case)",
    textDecoration: "var(--button-text-decoration)",
  },
  secondary: {
    backgroundColor: "var(--tokens-color-button-secondary-default)",
    color: "var(--tokens-color-button-secondary-text)",
    padding: "var(--spacing-spacing-3) var(--spacing-spacing-10)",
    fontFamily: "var(--button-font-family)",
    fontWeight: "var(--button-font-weight)",
    lineHeight: "var(--button-line-height)",
    fontSize: "var(--button-font-size)",
    letterSpacing: "var(--button-letter-spacing)",
    paragraphSpacing: "var(--button-paragraph-spacing)",
    paragraphIndent: "var(--button-paragraph-indent)",
    textCase: "var(--button-text-case)",
    textDecoration: "var(--button-text-decoration)",
  },
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    variantStyles[props.variant || "primary"].backgroundColor};
  color: ${(props) => variantStyles[props.variant || "primary"].color};
  padding: ${(props) => variantStyles[props.variant || "primary"].padding};
  font-family: ${(props) =>
    variantStyles[props.variant || "primary"].fontFamily};
  font-weight: ${(props) =>
    variantStyles[props.variant || "primary"].fontWeight};
  line-height: ${(props) =>
    variantStyles[props.variant || "primary"].lineHeight};
  font-size: ${(props) => variantStyles[props.variant || "primary"].fontSize};
  letter-spacing: ${(props) =>
    variantStyles[props.variant || "primary"].letterSpacing};
  text-transform: ${(props) =>
    variantStyles[props.variant || "primary"].textCase};
  text-decoration: ${(props) =>
    variantStyles[props.variant || "primary"].textDecoration};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.variant === "secondary"
        ? "var(--tokens-color-button-secondary-hover)"
        : "var(--tokens-color-button-primary-hover)"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
}) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
