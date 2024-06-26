import React from "react";
import styled from "styled-components";
import Text from "../../Primatives/Text/Text";
import Stack from "../../LayoutComponents/Stack/Stack";
import {
  TokensHelpTextDefaultDefault,
  TokensHelpTextSuccessDefault,
  TokensHelpTextWarningDefault,
  TokensHelpTextErrorDefault,
  SpacingSpacing1,
  FontSizeSmallIcon,
} from "../../../tokens/js/variables";
import SuccessIcon from "../../../assets/icons/Success";
import WarningIcon from "../../../assets/icons/Warning";
import ErrorIcon from "../../../assets/icons/Error";

export interface HelpTextProps {
  variant?: "default" | "error" | "warning" | "success";
  children: React.ReactNode;
}

const variantStyles = {
  default: {
    color: TokensHelpTextDefaultDefault,
    icon: null,
  },
  error: {
    color: TokensHelpTextErrorDefault,
    icon: (
      <ErrorIcon size={FontSizeSmallIcon} color={TokensHelpTextErrorDefault} />
    ),
  },
  warning: {
    color: TokensHelpTextWarningDefault,
    icon: (
      <WarningIcon
        size={FontSizeSmallIcon}
        color={TokensHelpTextWarningDefault}
      />
    ),
  },
  success: {
    color: TokensHelpTextSuccessDefault,
    icon: (
      <SuccessIcon
        size={FontSizeSmallIcon}
        color={TokensHelpTextSuccessDefault}
      />
    ),
  },
};

interface StyledHelpTextProps {
  variant: "default" | "error" | "warning" | "success";
}

const StyledHelpText = styled.span<StyledHelpTextProps>`
  color: ${(props) => variantStyles[props.variant].color};
`;

const HelpText: React.FC<HelpTextProps> = ({
  variant = "default",
  children,
}) => {
  const icon = variantStyles[variant].icon;
  return (
    <Stack orientation="horizontal" spacing={SpacingSpacing1}>
      {icon &&
        React.cloneElement(icon, {
          style: { color: variantStyles[variant].color },
        })}
      <StyledHelpText variant={variant}>
        <Text as="caption">{children}</Text>
      </StyledHelpText>
    </Stack>
  );
};

export default HelpText;
