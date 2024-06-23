import React from "react";
import PrimaryButton from "./PrimaryButton/PrimaryButton";
import SecondaryButton from "./SecondaryButton/SecondaryButton";
import DestructivePrimaryButton from "./DestructivePrimary/DestructivePrimaryButton";
import DestructiveSecondaryButton from "./DestructiveSecondary/DestructiveSecondaryButton";
import IconOnlyButton from "./IconOnlyButton/IconOnlyButton";
import LinkButton from "./LinkButton/LinkButton";
import DestructiveLink from "./DestructiveLink/DestructiveLink";
import PrimaryWithIcon from "./PrimaryWithIcon/PrimaryWithIcon";
import SecondaryWithIcon from "./SecondaryWithIcon/SecondaryWithIcon";
import DestructiveWithIcon from "./DestructiveWithIcon/DestructiveWithIcon";
import DestructiveSecondaryWithIcon from "./DestructiveSecondaryWithIcon/DestructiveSecondaryWithIcon";
import iconComponents from "../icons/iconMapping";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructivePrimary"
  | "destructiveSecondary"
  | "iconOnly"
  | "link"
  | "destructiveLink"
  | "primaryWithIcon"
  | "secondaryWithIcon"
  | "destructiveWithIcon"
  | "destructiveSecondaryWithIcon";

const variantMapping: Record<ButtonVariant, React.ComponentType<any>> = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
  destructivePrimary: DestructivePrimaryButton,
  destructiveSecondary: DestructiveSecondaryButton,
  iconOnly: IconOnlyButton,
  link: LinkButton,
  destructiveLink: DestructiveLink,
  primaryWithIcon: PrimaryWithIcon,
  secondaryWithIcon: SecondaryWithIcon,
  destructiveWithIcon: DestructiveWithIcon,
  destructiveSecondaryWithIcon: DestructiveSecondaryWithIcon,
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
