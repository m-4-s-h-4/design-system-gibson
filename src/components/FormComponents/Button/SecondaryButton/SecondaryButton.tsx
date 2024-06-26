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
  SpacingSpacing2,
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

const SecondaryButton: React.FC<
  BaseButtonProps & { destructive?: boolean }
> = ({ children, destructive, ...props }) => {
  return (
    <StyledButton {...props} destructive={destructive}>
      <Flex xAlign="center" yAlign="center">
        <Text as="buttonLarge">{children}</Text>
      </Flex>
    </StyledButton>
  );
};

export default SecondaryButton;
