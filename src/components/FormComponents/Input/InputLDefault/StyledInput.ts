import styled from "styled-components";
import {
  SpacingSpacing3,
  SpacingSpacing2,
  SpacingSpacing11,
  TokensInputBackgroundDefault,
  TokensInputPlaceholderDefault,
  TokensInputPlaceholderHover,
  TokensInputPlaceholderText,
  TokensInputPlaceholderError,
  BodyMediumFontFamily,
  BodyMediumFontWeight,
  BodyMediumLineHeight,
  BodyMediumFontSize,
  BodyMediumLetterSpacing,
  BodyMediumParagraphSpacing,
  BodyMediumTextDecoration,
  BodyMediumTextCase,
} from "../../../../tokens/js/variables";

const StyledInput = styled.input<{ isError: boolean }>`
  width: 320px;
  padding: ${SpacingSpacing2} ${SpacingSpacing11} ${SpacingSpacing2}
    ${SpacingSpacing3};
  background-color: ${TokensInputBackgroundDefault};
  color: ${(props) =>
    props.isError ? TokensInputPlaceholderError : TokensInputPlaceholderText};
  border: ${(props) =>
    props.isError ? `1px solid ${TokensInputPlaceholderError}` : "transparent"};
  box-sizing: border-box;
  font-family: ${BodyMediumFontFamily};
  font-weight: ${BodyMediumFontWeight};
  line-height: ${BodyMediumLineHeight};
  font-size: ${BodyMediumFontSize};
  letter-spacing: ${BodyMediumLetterSpacing};
  margin-bottom: ${BodyMediumParagraphSpacing};
  text-decoration: ${BodyMediumTextDecoration};
  text-transform: ${BodyMediumTextCase};
  transition: border-color 0.3s ease;

  &::placeholder {
    font-family: ${BodyMediumFontFamily};
    font-weight: ${BodyMediumFontWeight};
    line-height: ${BodyMediumLineHeight};
    font-size: ${BodyMediumFontSize};
    letter-spacing: ${BodyMediumLetterSpacing};
    text-decoration: ${BodyMediumTextDecoration};
    text-transform: ${BodyMediumTextCase};
    color: ${(props) =>
      props.isError
        ? TokensInputPlaceholderError
        : TokensInputPlaceholderDefault};
  }

  &:hover::placeholder {
    color: ${(props) =>
      props.isError
        ? TokensInputPlaceholderError
        : TokensInputPlaceholderHover};
  }

  &:focus::placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.isError ? TokensInputPlaceholderError : TokensInputPlaceholderText};
  }

  &[aria-invalid="true"] {
    border-color: ${TokensInputPlaceholderError};
  }
`;

export default StyledInput;
