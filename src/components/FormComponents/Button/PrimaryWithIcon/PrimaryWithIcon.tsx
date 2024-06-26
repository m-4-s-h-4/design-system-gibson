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
  FontSizeMediumIcon,
  SpacingSpacing0,
  SpacingSpacing10,
} from "../../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";
import Text from "../../../Primatives/Text/Text";
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
  display: flex;
  align-items: center;
`;

const PrimaryWithIcon: React.FC<ButtonWithIconProps> = ({
  iconType,
  children,
  destructive,
  ...props
}) => {
  const IconComponent = iconComponents[iconType];

  return (
    <StyledButtonWithIcon {...props} destructive={destructive}>
      <Flex xAlign="center" yAlign="center" gap={SpacingSpacing0}>
        <Text as="buttonLarge">{children}</Text>
        <IconWrapper>
          <IconComponent />
        </IconWrapper>
      </Flex>
    </StyledButtonWithIcon>
  );
};

export default PrimaryWithIcon;
