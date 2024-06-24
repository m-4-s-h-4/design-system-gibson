export interface BaseButtonProps {
  variant?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface ButtonProps extends BaseButtonProps {
  iconType?: keyof typeof import("../../../assets/icons/iconMapping").default;
}
