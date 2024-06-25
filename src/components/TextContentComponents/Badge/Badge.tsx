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
  TokensBadgeBrownBg,
  TokensBadgeHooverTextBrown,
  TokensBadgeTextBrown,
} from "../../../tokens/js/variables";
import SuccessIcon from "../../../assets/icons/Success";
import WarningIcon from "../../../assets/icons/Warning";
import ErrorIcon from "../../../assets/icons/Error";
import ClearIcon from "../../../assets/icons/Clear";

export interface BadgeProps {
  variant?: "dark" | "light" | "brown" | "warning" | "success" | "error";
  children: React.ReactNode;
  showIcon?: boolean;
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
  brown: {
    backgroundColor: TokensBadgeBrownBg,
    color: TokensBadgeTextBrown,
    hoverColor: TokensBadgeHooverTextBrown,
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
  variant: "dark" | "light" | "brown" | "warning" | "success" | "error";
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
  }
`;

const Badge: React.FC<BadgeProps> = ({
  variant = "light",
  children,
  showIcon = true,
}) => {
  const icon = variantStyles[variant].icon;
  return (
    <StyledBadgeWithIcon variant={variant}>
      {showIcon && icon}
      {children}
    </StyledBadgeWithIcon>
  );
};

export default Badge;
