import React from "react";
import styled from "styled-components";
import {
  H1HeadingMainFontFamily,
  H1HeadingMainFontWeight,
  H1HeadingMainLineHeight,
  H1HeadingMainFontSize,
  H1HeadingMainLetterSpacing,
  H1HeadingMainParagraphSpacing,
  H1HeadingMainTextDecoration,
  H1HeadingMainTextCase,
  H2HeadingMainFontFamily,
  H2HeadingMainFontWeight,
  H2HeadingMainLineHeight,
  H2HeadingMainFontSize,
  H2HeadingMainLetterSpacing,
  H2HeadingMainParagraphSpacing,
  H2HeadingMainTextDecoration,
  H2HeadingMainTextCase,
  H3HeadingMainFontFamily,
  H3HeadingMainFontWeight,
  H3HeadingMainLineHeight,
  H3HeadingMainFontSize,
  H3HeadingMainLetterSpacing,
  H3HeadingMainParagraphSpacing,
  H3HeadingMainTextDecoration,
  H3HeadingMainTextCase,
  H4HeadingMainFontFamily,
  H4HeadingMainFontWeight,
  H4HeadingMainLineHeight,
  H4HeadingMainFontSize,
  H4HeadingMainLetterSpacing,
  H4HeadingMainParagraphSpacing,
  H4HeadingMainTextDecoration,
  H4HeadingMainTextCase,
  H5HeadingMainFontFamily,
  H5HeadingMainFontWeight,
  H5HeadingMainLineHeight,
  H5HeadingMainFontSize,
  H5HeadingMainLetterSpacing,
  H5HeadingMainParagraphSpacing,
  H5HeadingMainTextDecoration,
  H5HeadingMainTextCase,
} from "../../tokens/js/variables";

export interface HeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  variant: "heading10" | "heading20" | "heading30" | "heading40" | "heading50";
  children: React.ReactNode;
}

const variantStyles = {
  heading10: {
    fontFamily: H1HeadingMainFontFamily,
    fontWeight: H1HeadingMainFontWeight,
    lineHeight: H1HeadingMainLineHeight,
    fontSize: H1HeadingMainFontSize,
    letterSpacing: H1HeadingMainLetterSpacing,
    marginBottom: H1HeadingMainParagraphSpacing,
    textDecoration: H1HeadingMainTextDecoration,
    textTransform: H1HeadingMainTextCase,
  },
  heading20: {
    fontFamily: H2HeadingMainFontFamily,
    fontWeight: H2HeadingMainFontWeight,
    lineHeight: H2HeadingMainLineHeight,
    fontSize: H2HeadingMainFontSize,
    letterSpacing: H2HeadingMainLetterSpacing,
    marginBottom: H2HeadingMainParagraphSpacing,
    textDecoration: H2HeadingMainTextDecoration,
    textTransform: H2HeadingMainTextCase,
  },
  heading30: {
    fontFamily: H3HeadingMainFontFamily,
    fontWeight: H3HeadingMainFontWeight,
    lineHeight: H3HeadingMainLineHeight,
    fontSize: H3HeadingMainFontSize,
    letterSpacing: H3HeadingMainLetterSpacing,
    marginBottom: H3HeadingMainParagraphSpacing,
    textDecoration: H3HeadingMainTextDecoration,
    textTransform: H3HeadingMainTextCase,
  },
  heading40: {
    fontFamily: H4HeadingMainFontFamily,
    fontWeight: H4HeadingMainFontWeight,
    lineHeight: H4HeadingMainLineHeight,
    fontSize: H4HeadingMainFontSize,
    letterSpacing: H4HeadingMainLetterSpacing,
    marginBottom: H4HeadingMainParagraphSpacing,
    textDecoration: H4HeadingMainTextDecoration,
    textTransform: H4HeadingMainTextCase,
  },
  heading50: {
    fontFamily: H5HeadingMainFontFamily,
    fontWeight: H5HeadingMainFontWeight,
    lineHeight: H5HeadingMainLineHeight,
    fontSize: H5HeadingMainFontSize,
    letterSpacing: H5HeadingMainLetterSpacing,
    marginBottom: H5HeadingMainParagraphSpacing,
    textDecoration: H5HeadingMainTextDecoration,
    textTransform: H5HeadingMainTextCase,
  },
};

const StyledHeading = styled.h1<{
  variant: "heading10" | "heading20" | "heading30" | "heading40" | "heading50";
}>`
  font-family: ${(props) => variantStyles[props.variant].fontFamily};
  font-weight: ${(props) => variantStyles[props.variant].fontWeight};
  line-height: ${(props) => variantStyles[props.variant].lineHeight};
  font-size: ${(props) => variantStyles[props.variant].fontSize};
  letter-spacing: ${(props) => variantStyles[props.variant].letterSpacing};
  margin-bottom: ${(props) => variantStyles[props.variant].marginBottom};
  text-decoration: ${(props) => variantStyles[props.variant].textDecoration};
  text-transform: ${(props) => variantStyles[props.variant].textTransform};
`;

const Heading: React.FC<HeadingProps> = ({ as, variant, children }) => {
  const CustomTag = as;
  return (
    <StyledHeading as={CustomTag} variant={variant}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
