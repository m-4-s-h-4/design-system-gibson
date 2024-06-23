import React from "react";
import styled from "styled-components";
import {
  TokensBadgeDarkBg,
  TokensBadgeLightBg,
  TokensBadgeWarningBg,
  TokensBadgeSuccessBg,
  TokensBadgeErrorBg,
  TokensBadgeTextDark,
  TokensBadgeTextLight,
  TokensBadgeTextError,
  TokensBadgeTextSuccess,
  TokensBadgeTextWarning,
  TokensBadgeHooverTextDark,
  TokensBadgeHooverTextLight,
  TokensBadgeHooverTextError,
  TokensBadgeHooverTextSuccess,
  TokensBadgeHooverTextWarning,
  SpacingSpacing1,
  SpacingSpacing2,
  CaptionFontFamily,
  CaptionFontWeight,
  CaptionLineHeight,
  CaptionFontSize,
  CaptionLetterSpacing,
  CaptionParagraphSpacing,
  CaptionTextDecoration,
  CaptionTextCase,
  FontSizeSmallIcon,
} from "../../../tokens/js/variables";
import SuccessIcon from "../../icons/Success";
import WarningIcon from "../../icons/Warning";
import ErrorIcon from "../../icons/Error";
import ClearIcon from "../../icons/Clear";

export interface BadgeWithIconProps {
  variant?: "dark" | "light" | "warning" | "success" | "error";
  children: React.ReactNode;
}

const variantStyles = {
  dark: {
    backgroundColor: TokensBadgeDarkBg,
    color: TokensBadgeTextDark,
    hoverColor: TokensBadgeHooverTextDark,
    icon: <ClearIcon size={FontSizeSmallIcon} />,
  },
  light: {
    backgroundColor: TokensBadgeLightBg,
    color: TokensBadgeTextLight,
    hoverColor: TokensBadgeHooverTextLight,
    icon: <ClearIcon size={FontSizeSmallIcon} />,
  },
  warning: {
    backgroundColor: TokensBadgeWarningBg,
    color: TokensBadgeTextWarning,
    hoverColor: TokensBadgeHooverTextWarning,
    icon: <WarningIcon size={FontSizeSmallIcon} />,
  },
  success: {
    backgroundColor: TokensBadgeSuccessBg,
    color: TokensBadgeTextSuccess,
    hoverColor: TokensBadgeHooverTextSuccess,
    icon: <SuccessIcon size={FontSizeSmallIcon} />,
  },
  error: {
    backgroundColor: TokensBadgeErrorBg,
    color: TokensBadgeTextError,
    hoverColor: TokensBadgeHooverTextError,
    icon: <ErrorIcon size={FontSizeSmallIcon} />,
  },
};

const StyledBadgeWithIcon = styled.span<{
  variant: "dark" | "light" | "warning" | "success" | "error";
}>`
  background-color: ${(props) => variantStyles[props.variant].backgroundColor};
  color: ${(props) => variantStyles[props.variant].color};
  padding: ${SpacingSpacing1} ${SpacingSpacing2};
  display: inline-flex;
  align-items: center;
  font-family: ${CaptionFontFamily};
  font-weight: ${CaptionFontWeight};
  line-height: ${CaptionLineHeight};
  font-size: ${CaptionFontSize};
  letter-spacing: ${CaptionLetterSpacing};
  margin-bottom: ${CaptionParagraphSpacing};
  text-decoration: ${CaptionTextDecoration};
  text-transform: ${CaptionTextCase};
  gap: ${SpacingSpacing1};
  
  &:hover {
    color: ${(props) => variantStyles[props.variant].hoverColor};
`;

const BadgeWithIcon: React.FC<BadgeWithIconProps> = ({
  variant = "light",
  children,
}) => {
  const icon = variantStyles[variant].icon;
  return (
    <StyledBadgeWithIcon variant={variant}>
      {icon}
      {children}
    </StyledBadgeWithIcon>
  );
};

export default BadgeWithIcon;
