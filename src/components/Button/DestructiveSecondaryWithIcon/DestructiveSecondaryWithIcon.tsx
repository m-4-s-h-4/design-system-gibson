import React from "react";
import styled from "styled-components";
import {
  TokensColorButtonDestructiveDefault,
  TokensColorButtonDestructiveHover,
  TokensColorButtonDisabledDefault,
  SpacingSpacing3,
  SpacingSpacing11,
  ButtonFontFamily,
  ButtonFontWeight,
  ButtonLineHeight,
  ButtonFontSize,
  ButtonLetterSpacing,
  ButtonTextCase,
  ButtonTextDecoration,
  FontSizeMediumIcon,
  SpacingSpacing0,
} from "../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";
import iconComponents from "../../icons/iconMapping";
import Flex from "../../Layout/Flex/Flex";

interface DestructiveSecondaryWithIconProps extends BaseButtonProps {
  iconType: keyof typeof iconComponents;
}

const StyledDestructiveSecondaryButton = styled.button<BaseButtonProps>`
  padding: ${SpacingSpacing3} ${SpacingSpacing11};
  font-family: ${ButtonFontFamily};
  font-weight: ${ButtonFontWeight};
  line-height: ${ButtonLineHeight};
  font-size: ${ButtonFontSize};
  letter-spacing: ${ButtonLetterSpacing};
  text-transform: ${ButtonTextCase};
  text-decoration: ${ButtonTextDecoration};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  background-color: transparent;
  color: ${(props) =>
    props.disabled
      ? TokensColorButtonDisabledDefault
      : TokensColorButtonDestructiveDefault};
  border: 2px solid
    ${(props) =>
      props.disabled
        ? TokensColorButtonDisabledDefault
        : TokensColorButtonDestructiveDefault};

  &:hover {
    border-color: ${(props) =>
      !props.disabled && TokensColorButtonDestructiveHover};
    color: ${(props) => !props.disabled && TokensColorButtonDestructiveHover};
  }
`;

const IconWrapper = styled.span`
  font-size: ${FontSizeMediumIcon};
`;

const DestructiveSecondaryWithIcon: React.FC<
  DestructiveSecondaryWithIconProps
> = ({ iconType, children, ...props }) => {
  const IconComponent = iconComponents[iconType];

  return (
    <StyledDestructiveSecondaryButton {...props}>
      <Flex xAlign="center" yAlign="center" gap={SpacingSpacing0}>
        {children}
        <IconWrapper>
          <IconComponent />
        </IconWrapper>
      </Flex>
    </StyledDestructiveSecondaryButton>
  );
};

export default DestructiveSecondaryWithIcon;
