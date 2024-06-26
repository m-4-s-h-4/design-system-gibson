import styled from "styled-components";
import {
  TokensButtonPrimaryDefault,
  TokensButtonPrimaryHover,
  TokensButtonPrimaryText,
  TokensButtonDestructiveDefault,
  TokensButtonDestructiveHover,
  TokensButtonDisabledDefault,
  TokensButtonDisabledText,
  SpacingSpacing3,
  SpacingSpacing11,
  ButtonFontFamily,
  ButtonFontWeight,
  ButtonLineHeight,
  ButtonFontSize,
  ButtonLetterSpacing,
  ButtonTextCase,
  ButtonTextDecoration,
} from "../../../../tokens/js/variables";
import { BaseButtonProps } from "../ButtonProps";

const PrimaryButton = styled.button<
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
  border: none;

  background-color: ${(props) =>
    props.disabled
      ? TokensButtonDisabledDefault
      : props.destructive
        ? TokensButtonDestructiveDefault
        : TokensButtonPrimaryDefault};
  color: ${(props) =>
    props.disabled ? TokensButtonDisabledText : TokensButtonPrimaryText};

  &:hover {
    background-color: ${(props) =>
      !props.disabled &&
      (props.destructive
        ? TokensButtonDestructiveHover
        : TokensButtonPrimaryHover)};
    color: ${(props) => !props.disabled && TokensButtonPrimaryText};
  }
`;

export default PrimaryButton;
