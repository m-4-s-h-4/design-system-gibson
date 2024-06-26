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
} from "../../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";
import Flex from "../../../LayoutComponents/Flex/Flex";
import Text from "../../../Primatives/Text/Text";

const StyledButton = styled.button<{
  destructive?: boolean;
  disabled?: boolean;
}>`
  padding: ${SpacingSpacing3} ${SpacingSpacing11};
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

const PrimaryButton: React.FC<BaseButtonProps & { destructive?: boolean }> = ({
  children,
  destructive,
  ...props
}) => {
  return (
    <StyledButton {...props} destructive={destructive}>
      <Flex xAlign="center" yAlign="center">
        <Text as="buttonLarge">{children}</Text>
      </Flex>
    </StyledButton>
  );
};

export default PrimaryButton;
