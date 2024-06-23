import React from "react";
import styled from "styled-components";
import {
  TokensColorIconPrimaryColor,
  FontSizeMediumIcon,
  TokensColorButtonDisabledDefault,
} from "../../../tokens/js/variables";
import iconMapping from "../../icons/iconMapping";

interface IconOnlyButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  iconType?: keyof typeof iconMapping;
}

const StyledButton = styled.button<{ disabled?: boolean }>`
  background-color: transparent;
  color: ${TokensColorIconPrimaryColor};
  padding: 0;
  font-size: ${FontSizeMediumIcon};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border: none;

  &:hover {
    color: ${TokensColorIconPrimaryColor};
  }

  &:disabled {
    color: ${TokensColorButtonDisabledDefault};
  }
`;

const IconOnlyButton: React.FC<IconOnlyButtonProps> = ({
  onClick,
  disabled = false,
  iconType = "Next",
}) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  const IconComponent = iconMapping[iconType];

  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      <IconComponent />
    </StyledButton>
  );
};

export default IconOnlyButton;
