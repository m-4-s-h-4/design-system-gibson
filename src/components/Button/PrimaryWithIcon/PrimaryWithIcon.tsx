import styled from "styled-components";
import {
  TokensColorButtonPrimaryDefault,
  TokensColorButtonPrimaryHover,
  TokensColorButtonPrimaryText,
  TokensColorButtonDestructiveDefault,
  TokensColorButtonDestructiveHover,
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

export interface ButtonWithIconProps extends BaseButtonProps {
  iconType: keyof typeof iconComponents;
  destructive?: boolean;
}

const StyledButtonWithIcon = styled.button<
  BaseButtonProps & { destructive?: boolean }
>`
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
      : props.destructive
        ? TokensColorButtonDestructiveDefault
        : TokensColorButtonPrimaryDefault};
  color: ${(props) =>
    props.disabled
      ? TokensColorButtonDisabledText
      : TokensColorButtonPrimaryText};

  &:hover {
    background-color: ${(props) =>
      !props.disabled &&
      (props.destructive
        ? TokensColorButtonDestructiveHover
        : TokensColorButtonPrimaryHover)};
    color: ${(props) => !props.disabled && TokensColorButtonPrimaryText};
  }
`;

const IconWrapper = styled.span`
  font-size: ${FontSizeMediumIcon};
`;

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  iconType,
  children,
  destructive,
  ...props
}) => {
  const IconComponent = iconComponents[iconType];

  return (
    <StyledButtonWithIcon {...props} destructive={destructive}>
      <Flex xAlign="center" yAlign="center" gap={SpacingSpacing0}>
        {children}
        <IconWrapper>
          <IconComponent />
        </IconWrapper>
      </Flex>
    </StyledButtonWithIcon>
  );
};

export default ButtonWithIcon;
