import styled from "styled-components";
import {
  TokensColorButtonSecondaryDefault,
  TokensColorButtonSecondaryHover,
  TokensColorButtonSecondaryText,
  TokensColorButtonDestructiveDefault,
  TokensColorButtonDestructiveHover,
  TokensColorButtonDisabledDefault,
  TokensColorButtonDisabledText,
  SpacingSpacing3,
  SpacingSpacing11,
  SpacingSpacing2,
  ButtonFontFamily,
  ButtonFontWeight,
  ButtonLineHeight,
  ButtonFontSize,
  ButtonLetterSpacing,
  ButtonTextCase,
  ButtonTextDecoration,
} from "../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";

const SecondaryButton = styled.button<
  BaseButtonProps & { destructive?: boolean }
>`
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
  border: ${(props) =>
    props.destructive
      ? `2px solid ${props.disabled ? TokensColorButtonDisabledDefault : TokensColorButtonDestructiveDefault}`
      : "none"};
  background-color: ${(props) =>
    props.disabled && props.destructive
      ? "transparent"
      : props.disabled
        ? TokensColorButtonDisabledDefault
        : props.destructive
          ? "transparent"
          : TokensColorButtonSecondaryDefault};
  color: ${(props) =>
    props.disabled && props.destructive
      ? TokensColorButtonDisabledDefault
      : props.disabled
        ? TokensColorButtonDisabledText
        : props.destructive
          ? TokensColorButtonDestructiveDefault
          : TokensColorButtonSecondaryText};

  &:hover {
    background-color: ${(props) =>
      !props.disabled &&
      (props.destructive ? "transparent" : TokensColorButtonSecondaryHover)};
    color: ${(props) =>
      !props.disabled &&
      (props.destructive
        ? TokensColorButtonDestructiveHover
        : TokensColorButtonSecondaryText)};
    border-color: ${(props) =>
      props.destructive &&
      !props.disabled &&
      TokensColorButtonDestructiveHover};
  }
`;

export default SecondaryButton;
