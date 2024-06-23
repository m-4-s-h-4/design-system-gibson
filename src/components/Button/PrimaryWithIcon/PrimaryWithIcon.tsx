import React from "react";
import styled from "styled-components";
import {
  TokensColorButtonPrimaryDefault,
  TokensColorButtonPrimaryHover,
  TokensColorButtonPrimaryText,
  TokensColorButtonDisabledDefault,
  TokensColorButtonDisabledText,
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

interface PrimaryWithIconProps extends BaseButtonProps {
  iconType: keyof typeof iconComponents;
}

const StyledPrimaryButton = styled.button<BaseButtonProps>`
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
  background-color: ${(props) =>
    props.disabled
      ? TokensColorButtonDisabledDefault
      : TokensColorButtonPrimaryDefault};
  color: ${(props) =>
    props.disabled
      ? TokensColorButtonDisabledText
      : TokensColorButtonPrimaryText};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && TokensColorButtonPrimaryHover};
    color: ${(props) => !props.disabled && TokensColorButtonPrimaryText};
  }
`;

const IconWrapper = styled.span`
  font-size: ${FontSizeMediumIcon};
`;

const PrimaryWithIcon: React.FC<PrimaryWithIconProps> = ({
  iconType,
  children,
  ...props
}) => {
  const IconComponent = iconComponents[iconType];

  return (
    <StyledPrimaryButton {...props}>
      <Flex xAlign="center" yAlign="center" gap={SpacingSpacing0}>
        {children}
        <IconWrapper>
          <IconComponent />
        </IconWrapper>
      </Flex>
    </StyledPrimaryButton>
  );
};

export default PrimaryWithIcon;
