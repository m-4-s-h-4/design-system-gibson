import React from "react";
import styled from "styled-components";
import {
  BodyLargeFontFamily,
  BodyLargeFontWeight,
  BodyLargeLineHeight,
  BodyLargeFontSize,
  BodyLargeLetterSpacing,
  BodyLargeParagraphSpacing,
  BodyLargeTextDecoration,
  BodyLargeTextCase,
  BodyMediumFontFamily,
  BodyMediumFontWeight,
  BodyMediumLineHeight,
  BodyMediumFontSize,
  BodyMediumLetterSpacing,
  BodyMediumParagraphSpacing,
  BodyMediumTextDecoration,
  BodyMediumTextCase,
  BodySmallFontFamily,
  BodySmallFontWeight,
  BodySmallLineHeight,
  BodySmallFontSize,
  BodySmallLetterSpacing,
  BodySmallParagraphSpacing,
  BodySmallTextDecoration,
  BodySmallTextCase,
} from "../../../tokens/js/variables";

export interface ParagraphProps {
  variant: "large" | "medium" | "small";
  children: React.ReactNode;
}

const variantStyles = {
  large: {
    fontFamily: BodyLargeFontFamily,
    fontWeight: BodyLargeFontWeight,
    lineHeight: BodyLargeLineHeight,
    fontSize: BodyLargeFontSize,
    letterSpacing: BodyLargeLetterSpacing,
    marginBottom: BodyLargeParagraphSpacing,
    textDecoration: BodyLargeTextDecoration,
    textTransform: BodyLargeTextCase,
  },
  medium: {
    fontFamily: BodyMediumFontFamily,
    fontWeight: BodyMediumFontWeight,
    lineHeight: BodyMediumLineHeight,
    fontSize: BodyMediumFontSize,
    letterSpacing: BodyMediumLetterSpacing,
    marginBottom: BodyMediumParagraphSpacing,
    textDecoration: BodyMediumTextDecoration,
    textTransform: BodyMediumTextCase,
  },
  small: {
    fontFamily: BodySmallFontFamily,
    fontWeight: BodySmallFontWeight,
    lineHeight: BodySmallLineHeight,
    fontSize: BodySmallFontSize,
    letterSpacing: BodySmallLetterSpacing,
    marginBottom: BodySmallParagraphSpacing,
    textDecoration: BodySmallTextDecoration,
    textTransform: BodySmallTextCase,
  },
};

const StyledParagraph = styled.p<{
  variant: "large" | "medium" | "small";
}>`
  font-family: ${(props) => variantStyles[props.variant].fontFamily};
  font-weight: ${(props) => variantStyles[props.variant].fontWeight};
  line-height: ${(props) => variantStyles[props.variant].lineHeight};
  font-size: ${(props) => variantStyles[props.variant].fontSize};
  letter-spacing: ${(props) => variantStyles[props.variant].letterSpacing};
  margin-bottom: ${(props) => variantStyles[props.variant].marginBottom};
  text-decoration: ${(props) => variantStyles[props.variant].textDecoration};
  text-transform: ${(props) => variantStyles[props.variant].textTransform};
  margin: 0;
`;

const Paragraph: React.FC<ParagraphProps> = ({ variant, children }) => {
  return <StyledParagraph variant={variant}>{children}</StyledParagraph>;
};

export default Paragraph;
