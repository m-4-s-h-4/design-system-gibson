import React from "react";
import styled from "styled-components";
import {
  TokensIconPrimaryColor,
  FontSizeMediumIcon,
  TokensButtonDisabledDefault,
} from "../../../../tokens/js/variables";
import iconMapping from "../../../../assets/icons/iconMapping";

interface IconOnlyButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  iconType?: keyof typeof iconMapping;
  color?: string;
}

const StyledButton = styled.button<{ disabled?: boolean; color?: string }>`
  background-color: transparent;
  color: ${(props) => props.color || TokensIconPrimaryColor};
  padding: 0;
  font-size: ${FontSizeMediumIcon};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;

  &:hover {
    color: ${(props) => props.color || TokensIconPrimaryColor};
  }

  &:disabled {
    color: ${TokensButtonDisabledDefault};
  }
`;

const IconOnlyButton: React.FC<IconOnlyButtonProps> = ({
  onClick,
  disabled = false,
  iconType = "Menu",
  color,
}) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  const IconComponent = iconMapping[iconType];

  return (
    <StyledButton onClick={handleClick} disabled={disabled} color={color}>
      <IconComponent />
    </StyledButton>
  );
};

export default IconOnlyButton;
