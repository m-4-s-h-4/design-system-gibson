import React from "react";
import styled from "styled-components";
import {
  CaptionFontWeight,
  CaptionLineHeight,
  CaptionFontSize,
  CaptionLetterSpacing,
  CaptionParagraphSpacing,
  CaptionTextDecoration,
  CaptionTextCase,
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
    icon: <ErrorIcon size={FontSizeSmallIcon} />,
  },
  warning: {
    color: TokensHelpTextWarningDefault,
    icon: <WarningIcon size={FontSizeSmallIcon} />,
  },
  success: {
    color: TokensHelpTextSuccessDefault,
    icon: <SuccessIcon size={FontSizeSmallIcon} />,
  },
};

const StyledHelpText = styled.span<{
  variant: "default" | "error" | "warning" | "success";
}>`
  font-family: Helvetica Neue;
  font-weight: ${CaptionFontWeight};
  line-height: ${CaptionLineHeight};
  font-size: ${CaptionFontSize};
  letter-spacing: ${CaptionLetterSpacing};
  margin-bottom: ${CaptionParagraphSpacing};
  text-decoration: ${CaptionTextDecoration};
  text-transform: ${CaptionTextCase};
  color: ${(props) => variantStyles[props.variant].color};
  display: inline-flex;
  align-items: center;
  gap: ${SpacingSpacing1};
`;

const HelpText: React.FC<HelpTextProps> = ({
  variant = "default",
  children,
}) => {
  const icon = variantStyles[variant].icon;
  return (
    <StyledHelpText variant={variant}>
      {icon}
      {children}
    </StyledHelpText>
  );
};

export default HelpText;
