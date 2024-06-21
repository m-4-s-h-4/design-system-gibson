import React from "react";
import styled from "styled-components";
import "../../tokens/css/_variables.css";

export interface HeadingProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5";
  variant: "heading10" | "heading20" | "heading30" | "heading40" | "heading50";
  children: React.ReactNode;
}

const variantStyles = {
  heading10: {
    fontFamily: "var(--tokens-h1-heading-main-font-family)",
    fontWeight: "var(--tokens-h1-heading-main-font-weight)",
    lineHeight: "var(--tokens-h1-heading-main-line-height)",
    fontSize: "var(--tokens-h1-heading-main-font-size)",
    letterSpacing: "var(--tokens-h1-heading-main-letter-spacing)",
    marginBottom: "var(--tokens-h1-heading-main-paragraph-spacing)",
    textDecoration: "var(--tokens-h1-heading-main-text-decoration)",
    textTransform: "var(--tokens-h1-heading-main-text-case)",
  },
  heading20: {
    fontFamily: "var(--tokens-h2-heading-main-font-family)",
    fontWeight: "var(--tokens-h2-heading-main-font-weight)",
    lineHeight: "var(--tokens-h2-heading-main-line-height)",
    fontSize: "var(--tokens-h2-heading-main-font-size)",
    letterSpacing: "var(--tokens-h2-heading-main-letter-spacing)",
    marginBottom: "var(--tokens-h2-heading-main-paragraph-spacing)",
    textDecoration: "var(--tokens-h2-heading-main-text-decoration)",
    textTransform: "var(--tokens-h2-heading-main-text-case)",
  },
  heading30: {
    fontFamily: "var(--tokens-h3-heading-main-font-family)",
    fontWeight: "var(--tokens-h3-heading-main-font-weight)",
    lineHeight: "var(--tokens-h3-heading-main-line-height)",
    fontSize: "var(--tokens-h3-heading-main-font-size)",
    letterSpacing: "var(--tokens-h3-heading-main-letter-spacing)",
    marginBottom: "var(--tokens-h3-heading-main-paragraph-spacing)",
    textDecoration: "var(--tokens-h3-heading-main-text-decoration)",
    textTransform: "var(--tokens-h3-heading-main-text-case)",
  },
  heading40: {
    fontFamily: "var(--tokens-h4-heading-main-font-family)",
    fontWeight: "var(--tokens-h4-heading-main-font-weight)",
    lineHeight: "var(--tokens-h4-heading-main-line-height)",
    fontSize: "var(--tokens-h4-heading-main-font-size)",
    letterSpacing: "var(--tokens-h4-heading-main-letter-spacing)",
    marginBottom: "var(--tokens-h4-heading-main-paragraph-spacing)",
    textDecoration: "var(--tokens-h4-heading-main-text-decoration)",
    textTransform: "var(--tokens-h4-heading-main-text-case)",
  },
  heading50: {
    fontFamily: "var(--tokens-h5-heading-main-font-family)",
    fontWeight: "var(--tokens-h5-heading-main-font-weight)",
    lineHeight: "var(--tokens-h5-heading-main-line-height)",
    fontSize: "var(--tokens-h5-heading-main-font-size)",
    letterSpacing: "0%",
    marginBottom: "0",
    textDecoration: "none",
    textTransform: "none",
  },
};

const StyledHeading = styled.h1<HeadingProps>`
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
  return (
    <StyledHeading as={as} variant={variant}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
