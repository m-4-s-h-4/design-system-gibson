import React from "react";
import styled from "styled-components";
import {
  TokensButtonLinkButtonDefault,
  TokensButtonDisabledDefault,
  TokensButtonSecondaryHover,
  TokensButtonDestructiveDefault,
  TokensButtonDestructiveHover,
  TextDecorationUnderline,
  TextDecorationNone,
} from "../../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";
import Text from "../../../Primatives/Text/Text";

interface LinkButtonProps extends BaseButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  destructive?: boolean;
}

const StyledButton = styled.button<{
  disabled?: boolean;
  destructive?: boolean;
}>`
  background-color: transparent;
  color: ${(props) =>
    props.disabled
      ? TokensButtonDisabledDefault
      : props.destructive
        ? TokensButtonDestructiveDefault
        : TokensButtonLinkButtonDefault};
  padding: 0;
  text-decoration: ${(props) =>
    props.destructive ? TextDecorationNone : TextDecorationUnderline};
  text-decoration-thickness: 3px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;

  &:hover {
    color: ${(props) =>
      !props.disabled &&
      (props.destructive
        ? TokensButtonDestructiveHover
        : TokensButtonSecondaryHover)};
  }
`;

const LinkButton: React.FC<LinkButtonProps> = ({
  onClick,
  disabled = false,
  destructive = false,
  children,
  ...props
}) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <StyledButton
      onClick={handleClick}
      disabled={disabled}
      destructive={destructive}
      {...props}
    >
      <Text as="buttonLarge">{children}</Text>
    </StyledButton>
  );
};

export default LinkButton;
