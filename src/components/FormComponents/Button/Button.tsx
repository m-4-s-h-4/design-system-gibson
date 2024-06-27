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
  /**
   * The variant of the button.
   * Can be one of 'primary', 'secondary', 'icon-only', 'primary-with-icon', 'secondary-with-icon', or 'link'.
   */
  variant:
    | "primary"
    | "secondary"
    | "icon-only"
    | "primary-with-icon"
    | "secondary-with-icon"
    | "link";

  /**
   * Determines if the button is destructive.
   */
  destructive?: boolean;

  /**
   * The type of icon to display. Only applicable for 'icon-only', 'primary-with-icon', and 'secondary-with-icon' variants.
   */
  iconType?: keyof typeof iconMapping;
}

const DEFAULT_ICON = "Next";
const Button: React.FC<ButtonProps> = ({
  variant,
  destructive = false,
  iconType = DEFAULT_ICON,
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
          iconType={iconType}
          destructive={destructive}
          {...props}
        >
          {children}
        </PrimaryWithIcon>
      );
    case "secondary-with-icon":
      return (
        <SecondaryWithIcon
          iconType={iconType}
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
