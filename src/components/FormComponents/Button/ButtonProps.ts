import iconMapping from "../../../assets/icons/iconMapping";

export interface BaseButtonProps {
  variant?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
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
