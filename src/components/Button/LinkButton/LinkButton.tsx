import styled from "styled-components";
import {
  TokensColorButtonLinkButtonDefault,
  TokensColorButtonDisabledDefault,
  TokensColorButtonSecondaryHover,
  TokensColorButtonDestructiveDefault,
  TokensColorButtonDestructiveHover,
  ButtonFontFamily,
  ButtonFontWeight,
  ButtonLineHeight,
  ButtonFontSize,
  ButtonLetterSpacing,
  ButtonTextCase,
  TextDecorationUnderline,
  TextDecorationNone,
} from "../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";

const LinkButton = styled.button<BaseButtonProps & { destructive?: boolean }>`
  background-color: transparent;
  color: ${(props) =>
    props.disabled
      ? TokensColorButtonDisabledDefault
      : props.destructive
        ? TokensColorButtonDestructiveDefault
        : TokensColorButtonLinkButtonDefault};
  padding: 0;
  font-family: ${ButtonFontFamily};
  font-weight: ${ButtonFontWeight};
  line-height: ${ButtonLineHeight};
  font-size: ${ButtonFontSize};
  letter-spacing: ${ButtonLetterSpacing};
  text-transform: ${ButtonTextCase};
  text-decoration: ${(props) =>
    props.destructive ? TextDecorationNone : TextDecorationUnderline};
  text-decoration-thickness: ${() => "3px"};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    color: ${(props) =>
      !props.disabled &&
      (props.destructive
        ? TokensColorButtonDestructiveHover
        : TokensColorButtonSecondaryHover)};
  }
`;

export default LinkButton;
