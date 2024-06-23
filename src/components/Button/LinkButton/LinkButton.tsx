import styled from "styled-components";
import {
  TokensColorButtonLinkButtonDefault,
  TokensColorButtonDisabledDefault,
  TokensColorButtonSecondaryHover,
  ButtonFontFamily,
  ButtonFontWeight,
  ButtonLineHeight,
  ButtonFontSize,
  ButtonLetterSpacing,
  ButtonTextCase,
  TextDecorationUnderline,
} from "../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";

const LinkButton = styled.button<BaseButtonProps>`
  background-color: transparent;
  color: ${(props) =>
    props.disabled
      ? TokensColorButtonDisabledDefault
      : TokensColorButtonLinkButtonDefault};
  padding: 0;
  font-family: ${ButtonFontFamily};
  font-weight: ${ButtonFontWeight};
  line-height: ${ButtonLineHeight};
  font-size: ${ButtonFontSize};
  letter-spacing: ${ButtonLetterSpacing};
  text-transform: ${ButtonTextCase};
  text-decoration: ${TextDecorationUnderline};
  text-decoration-thickness: ${() => "3px"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    color: ${(props) => !props.disabled && TokensColorButtonSecondaryHover};
  }
`;

export default LinkButton;
