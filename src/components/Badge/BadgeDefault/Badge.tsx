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
} from "../../../tokens/js/variables";
import Flex from "../../Layout/Flex/Flex";

export interface BadgeProps {
  variant?: "dark" | "light" | "warning" | "success" | "error";
  children: React.ReactNode;
}

const variantStyles = {
  dark: {
    backgroundColor: TokensBadgeDarkBg,
    color: TokensBadgeTextDark,
    hoverColor: TokensBadgeHooverTextDark,
  },
  light: {
    backgroundColor: TokensBadgeLightBg,
    color: TokensBadgeTextLight,
    hoverColor: TokensBadgeHooverTextLight,
  },
  warning: {
    backgroundColor: TokensBadgeWarningBg,
    color: TokensBadgeTextWarning,
    hoverColor: TokensBadgeHooverTextWarning,
  },
  success: {
    backgroundColor: TokensBadgeSuccessBg,
    color: TokensBadgeTextSuccess,
    hoverColor: TokensBadgeHooverTextSuccess,
  },
  error: {
    backgroundColor: TokensBadgeErrorBg,
    color: TokensBadgeTextError,
    hoverColor: TokensBadgeHooverTextError,
  },
};

const StyledBadge = styled.span<{
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

  &:hover {
    color: ${(props) => variantStyles[props.variant].hoverColor};
  }
`;

const Badge: React.FC<BadgeProps> = ({ variant = "light", children }) => {
  return (
    <Flex>
      <StyledBadge variant={variant}>{children}</StyledBadge>
    </Flex>
  );
};

export default Badge;
