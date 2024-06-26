import styled from "styled-components";
import {
  TokensButtonSecondaryDefault,
  TokensButtonSecondaryHover,
  TokensButtonSecondaryText,
  TokensButtonDestructiveDefault,
  TokensButtonDestructiveHover,
  TokensButtonDisabledDefault,
  TokensButtonDisabledText,
  SpacingSpacing3,
  SpacingSpacing11,
  FontSizeMediumIcon,
  SpacingSpacing2,
  SpacingSpacing0,
  SpacingSpacing10,
} from "../../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";
import iconComponents from "../../../../assets/icons/iconMapping";
import Flex from "../../../LayoutComponents/Flex/Flex";
import Text from "../../../Primatives/Text/Text";

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
  gap: ${SpacingSpacing2};
  border: ${(props) =>
    props.destructive
      ? `2px solid ${
          props.disabled
            ? TokensButtonDisabledDefault
            : TokensButtonDestructiveDefault
        }`
      : "none"};
  background-color: ${(props) =>
    props.disabled && props.destructive
      ? "transparent"
      : props.disabled
        ? TokensButtonDisabledDefault
        : props.destructive
          ? "transparent"
          : TokensButtonSecondaryDefault};
  color: ${(props) =>
    props.disabled && props.destructive
      ? TokensButtonDisabledDefault
      : props.disabled
        ? TokensButtonDisabledText
        : props.destructive
          ? TokensButtonDestructiveDefault
          : TokensButtonSecondaryText};

  &:hover {
    background-color: ${(props) =>
      !props.disabled &&
      (props.destructive ? "transparent" : TokensButtonSecondaryHover)};
    color: ${(props) =>
      !props.disabled &&
      (props.destructive
        ? TokensButtonDestructiveHover
        : TokensButtonSecondaryText)};
    border-color: ${(props) =>
      props.destructive && !props.disabled && TokensButtonDestructiveHover};
  }
`;

const IconWrapper = styled.span`
  font-size: ${FontSizeMediumIcon};
  display: flex;
  align-items: center;
`;

const SecondaryWithIcon: React.FC<ButtonWithIconProps> = ({
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

export default SecondaryWithIcon;
