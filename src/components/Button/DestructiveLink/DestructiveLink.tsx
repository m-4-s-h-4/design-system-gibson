import styled from "styled-components";
import {
  TokensColorButtonDestructiveDefault,
  TokensColorButtonDestructiveHover,
  TokensColorButtonDisabledDefault,
  ButtonFontFamily,
  ButtonFontWeight,
  ButtonLineHeight,
  ButtonFontSize,
  ButtonLetterSpacing,
  ButtonTextCase,
  TextDecorationNone,
} from "../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";

const DestructiveLink = styled.button<BaseButtonProps>`
  background-color: transparent;
  color: ${(props) =>
    props.disabled
      ? TokensColorButtonDisabledDefault
      : TokensColorButtonDestructiveDefault};
  padding: 0;
  font-family: ${ButtonFontFamily};
  font-weight: ${ButtonFontWeight};
  line-height: ${ButtonLineHeight};
  font-size: ${ButtonFontSize};
  letter-spacing: ${ButtonLetterSpacing};
  text-transform: ${ButtonTextCase};
  text-decoration: ${TextDecorationNone};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    color: ${(props) => !props.disabled && TokensColorButtonDestructiveHover};
  }
`;

export default DestructiveLink;
