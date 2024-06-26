import styled from "styled-components";
import {
  TokensButtonPrimaryDefault,
  TokensButtonPrimaryHover,
  TokensButtonPrimaryText,
  TokensButtonDestructiveDefault,
  TokensButtonDestructiveHover,
  TokensButtonDisabledDefault,
  TokensButtonDisabledText,
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
  SpacingSpacing10,
} from "../../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";
import iconComponents from "../../../../assets/icons/iconMapping";
import Flex from "../../../LayoutComponents/Flex/Flex";

export interface ButtonWithIconProps extends BaseButtonProps {
  iconType: keyof typeof iconComponents;
  destructive?: boolean;
}

const StyledButtonWithIcon = styled.button<
  BaseButtonProps & { destructive?: boolean }
>`
  padding: ${SpacingSpacing3} ${SpacingSpacing11} ${SpacingSpacing3}
    ${SpacingSpacing10};

  font-family: ${ButtonFontFamily};
  font-weight: ${ButtonFontWeight};
  line-height: ${ButtonLineHeight};
  font-size: ${ButtonFontSize};
  letter-spacing: ${ButtonLetterSpacing};
  text-transform: ${ButtonTextCase};
  text-decoration: ${ButtonTextDecoration};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  background-color: ${(props) =>
    props.disabled
      ? TokensButtonDisabledDefault
      : props.destructive
        ? TokensButtonDestructiveDefault
        : TokensButtonPrimaryDefault};
  color: ${(props) =>
    props.disabled ? TokensButtonDisabledText : TokensButtonPrimaryText};

  &:hover {
    background-color: ${(props) =>
      !props.disabled &&
      (props.destructive
        ? TokensButtonDestructiveHover
        : TokensButtonPrimaryHover)};
    color: ${(props) => !props.disabled && TokensButtonPrimaryText};
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
