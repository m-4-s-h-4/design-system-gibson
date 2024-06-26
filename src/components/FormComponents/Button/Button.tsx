import React from "react";
import { BaseButtonProps } from "./ButtonProps";
import iconMapping from "../../../assets/icons/iconMapping";
import IconOnlyButton from "./IconOnlyButton/IconOnlyButton";
import PrimaryButton from "./PrimaryButton/PrimaryButton";
import SecondaryButton from "./SecondaryButton/SecondaryButton";
import PrimaryWithIcon from "./PrimaryWithIcon/PrimaryWithIcon";
import SecondaryWithIcon from "./SecondaryWithIcon/SecondaryWithIcon";
import LinkButton from "./LinkButton/LinkButton";

interface ButtonProps extends BaseButtonProps {
  variant:
    | "primary"
    | "secondary"
    | "icon-only"
    | "primary-with-icon"
    | "secondary-with-icon"
    | "link";
  destructive?: boolean;
  iconType?: keyof typeof iconMapping;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  destructive = false,
  iconType,
  children,
  ...props
}) => {
  switch (variant) {
    case "icon-only":
      return <IconOnlyButton iconType={iconType} {...props} />;
    case "primary":
      return (
        <PrimaryButton destructive={destructive} {...props}>
          {children}
        </PrimaryButton>
      );
    case "secondary":
      return (
        <SecondaryButton destructive={destructive} {...props}>
          {children}
        </SecondaryButton>
      );
    case "primary-with-icon":
      return (
        <PrimaryWithIcon
          iconType={iconType!}
          destructive={destructive}
          {...props}
        >
          {children}
        </PrimaryWithIcon>
      );
    case "secondary-with-icon":
      return (
        <SecondaryWithIcon
          iconType={iconType!}
          destructive={destructive}
          {...props}
        >
          {children}
        </SecondaryWithIcon>
      );
    case "link":
      return (
        <LinkButton destructive={destructive} {...props}>
          {children}
        </LinkButton>
      );
    default:
      return null;
  }
};

export default Button;
