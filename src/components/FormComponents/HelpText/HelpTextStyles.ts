import styled from "styled-components";
import {
  TokensHelpTextDefaultDefault,
  TokensHelpTextSuccessDefault,
  TokensHelpTextWarningDefault,
  TokensHelpTextErrorDefault,
} from "../../../tokens/js/variables";

export const variantStyles = {
  default: {
    color: TokensHelpTextDefaultDefault,
    icon: null,
  },
  error: {
    color: TokensHelpTextErrorDefault,
  },
  warning: {
    color: TokensHelpTextWarningDefault,
  },
  success: {
    color: TokensHelpTextSuccessDefault,
  },
};

interface StyledHelpTextProps {
  variant: "default" | "error" | "warning" | "success";
}

export const StyledHelpText = styled.span<StyledHelpTextProps>`
  color: ${(props) => variantStyles[props.variant].color};
`;
