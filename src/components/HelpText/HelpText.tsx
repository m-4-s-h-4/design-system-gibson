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
} from "../../tokens/js/variables";
import SuccessIcon from "../icons/Success";
import WarningIcon from "../icons/Warning";
import ErrorIcon from "../icons/Error";
import Flex from "../Layout/Flex/Flex";

export interface HelpTextProps {
  variant?: "default" | "error" | "warning" | "success";
  children: React.ReactNode;
}

const variantStyles = {
  default: {
    color: TokensHelpTextDefaultDefault,
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
`;

const HelpText: React.FC<HelpTextProps> = ({
  variant = "default",
  children,
}) => {
  const icon = variant !== "default" ? variantStyles[variant].icon : null;
  return (
    <Flex gap={SpacingSpacing1}>
      {icon}
      <StyledHelpText variant={variant}>{children}</StyledHelpText>
    </Flex>
  );
};

export default HelpText;
