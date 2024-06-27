import React from "react";
import Text from "../../Primatives/Text/Text";
import Stack from "../../LayoutComponents/Stack/Stack";
import {
  SpacingSpacing1,
  FontSizeSmallIcon,
} from "../../../tokens/js/variables";
import SuccessIcon from "../../../assets/icons/Success";
import WarningIcon from "../../../assets/icons/Warning";
import ErrorIcon from "../../../assets/icons/Error";
import { variantStyles, StyledHelpText } from "./HelpTextStyles";

/**
 * Props for the HelpText component.
 */
export interface HelpTextProps {
  /**
   * The variant of the help text.
   * Can be 'default', 'error', 'warning', or 'success'.
   * @default "default"
   */
  variant?: "default" | "error" | "warning" | "success";

  /**
   * The content of the help text.
   */
  children: React.ReactNode;
}

const HelpText: React.FC<HelpTextProps> = ({
  variant = "default",
  children,
}) => {
  const icon =
    variant === "error" ? (
      <ErrorIcon size={FontSizeSmallIcon} color={variantStyles.error.color} />
    ) : variant === "warning" ? (
      <WarningIcon
        size={FontSizeSmallIcon}
        color={variantStyles.warning.color}
      />
    ) : variant === "success" ? (
      <SuccessIcon
        size={FontSizeSmallIcon}
        color={variantStyles.success.color}
      />
    ) : null;

  return (
    <Stack orientation="horizontal" spacing={SpacingSpacing1}>
      {icon}
      <StyledHelpText variant={variant}>
        <Text as="caption">{children}</Text>
      </StyledHelpText>
    </Stack>
  );
};

export default HelpText;
