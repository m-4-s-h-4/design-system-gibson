import styled from "styled-components";
import {
  TokensColorButtonSecondaryDefault,
  TokensColorButtonSecondaryHover,
  TokensColorButtonSecondaryText,
  TokensColorButtonDisabledDefault,
  TokensColorButtonDisabledText,
  SpacingSpacing3,
  SpacingSpacing11,
  ButtonFontFamily,
  ButtonFontWeight,
  ButtonLineHeight,
  ButtonFontSize,
  ButtonLetterSpacing,
  ButtonTextCase,
  ButtonTextDecoration,
  SpacingSpacing2,
} from "../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";

const SecondaryButton = styled.button<BaseButtonProps>`
  padding: ${SpacingSpacing3} ${SpacingSpacing11};
  font-family: ${ButtonFontFamily};
  font-weight: ${ButtonFontWeight};
  line-height: ${ButtonLineHeight};
  font-size: ${ButtonFontSize};
  letter-spacing: ${ButtonLetterSpacing};
  text-transform: ${ButtonTextCase};
  text-decoration: ${ButtonTextDecoration};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${SpacingSpacing2};
  border: none;

  background-color: ${(props) =>
    props.disabled
      ? TokensColorButtonDisabledDefault
      : TokensColorButtonSecondaryDefault};
  color: ${(props) =>
    props.disabled
      ? TokensColorButtonDisabledText
      : TokensColorButtonSecondaryText};

  &:hover {
    background-color: ${(props) =>
      !props.disabled && TokensColorButtonSecondaryHover};
    color: ${(props) => !props.disabled && TokensColorButtonSecondaryText};
  }
`;

export default SecondaryButton;
