import React from "react";
import SecondaryButton from "./SecondaryButton/SecondaryButton";
import IconOnlyButton from "./IconOnlyButton/IconOnlyButton";
import LinkButton from "./LinkButton/LinkButton";
import PrimaryWithIcon from "./PrimaryWithIcon/PrimaryWithIcon";
import SecondaryWithIcon from "./SecondaryWithIcon/SecondaryWithIcon";
import iconComponents from "../icons/iconMapping";
import PrimaryButton from "./PrimaryButton/PrimaryButton";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "iconOnly"
  | "link"
  | "primaryWithIcon"
  | "secondaryWithIcon";

const variantMapping: Record<ButtonVariant, React.ComponentType<any>> = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  iconOnly: IconOnlyButton,
  link: LinkButton,
  primaryWithIcon: PrimaryWithIcon,
  secondaryWithIcon: SecondaryWithIcon,
};

export interface ButtonProps {
  variant?: ButtonVariant;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: boolean;
  iconType?: keyof typeof iconComponents;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  disabled = false,
  icon = false,
  iconType = "Next",
}) => {
  const ButtonComponent = variantMapping[variant] || PrimaryButton;
  const IconComponent = iconComponents[iconType];

  return (
    <ButtonComponent onClick={onClick} disabled={disabled} iconType={iconType}>
      {children}
      {icon && IconComponent && variant !== "iconOnly" && <IconComponent />}
    </ButtonComponent>
  );
};

export default Button;
