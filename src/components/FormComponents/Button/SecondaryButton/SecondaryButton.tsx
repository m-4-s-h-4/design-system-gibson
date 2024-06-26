import styled from "styled-components";
import {
  TokensButtonSecondaryDefault,
  TokensButtonSecondaryHover,
  TokensButtonSecondaryText,
  TokensButtonDestructiveDefault,
  TokensButtonDestructiveHover,
  TokensButtonDisabledDefault,
  TokensButtonDisabledText,
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
} from "../../../../tokens/js/variables";
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
  gap: ${SpacingSpacing2};
  border: ${(props) =>
    props.destructive
      ? `2px solid ${props.disabled ? TokensButtonDisabledDefault : TokensButtonDestructiveDefault}`
      : "none"};
  background-color: ${(props) =>
    props.disabled && props.destructive
      ? "transparent"
      : props.disabled
        ? TokensButtonDisabledDefault
        : props.destructive
          ? "transparent"
          : TokensButtonSecondaryDefault};
  color: ${(props) =>
    props.disabled && props.destructive
      ? TokensButtonDisabledDefault
      : props.disabled
        ? TokensButtonDisabledText
        : props.destructive
          ? TokensButtonDestructiveDefault
          : TokensButtonSecondaryText};

  &:hover {
    background-color: ${(props) =>
      !props.disabled &&
      (props.destructive ? "transparent" : TokensButtonSecondaryHover)};
    color: ${(props) =>
      !props.disabled &&
      (props.destructive
        ? TokensButtonDestructiveHover
        : TokensButtonSecondaryText)};
    border-color: ${(props) =>
      props.destructive && !props.disabled && TokensButtonDestructiveHover};
  }
`;

export default SecondaryButton;
