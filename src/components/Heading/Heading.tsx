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
    fontFamily: "var(--h1-heading-main-font-family)",
    fontWeight: "var(--h1-heading-main-font-weight)",
    lineHeight: "var(--h1-heading-main-line-height)",
    fontSize: "var(--h1-heading-main-font-size)",
    letterSpacing: "var(--h1-heading-main-letter-spacing)",
    marginBottom: "var(--h1-heading-main-paragraph-spacing)",
    textDecoration: "var(--h1-heading-main-text-decoration)",
    textTransform: "var(--h1-heading-main-text-case)",
  },
  heading20: {
    fontFamily: "var(--h2-heading-main-font-family)",
    fontWeight: "var(--h2-heading-main-font-weight)",
    lineHeight: "var(--h2-heading-main-line-height)",
    fontSize: "var(--h2-heading-main-font-size)",
    letterSpacing: "var(--h2-heading-main-letter-spacing)",
    marginBottom: "var(--h2-heading-main-paragraph-spacing)",
    textDecoration: "var(--h2-heading-main-text-decoration)",
    textTransform: "var(--h2-heading-main-text-case)",
  },
  heading30: {
    fontFamily: "var(--h3-heading-main-font-family)",
    fontWeight: "var(--h3-heading-main-font-weight)",
    lineHeight: "var(--h3-heading-main-line-height)",
    fontSize: "var(--h3-heading-main-font-size)",
    letterSpacing: "var(--h3-heading-main-letter-spacing)",
    marginBottom: "var(--h3-heading-main-paragraph-spacing)",
    textDecoration: "var(--h3-heading-main-text-decoration)",
    textTransform: "var(--h3-heading-main-text-case)",
  },
  heading40: {
    fontFamily: "var(--h4-heading-main-font-family)",
    fontWeight: "var(--h4-heading-main-font-weight)",
    lineHeight: "var(--h4-heading-main-line-height)",
    fontSize: "var(--h4-heading-main-font-size)",
    letterSpacing: "var(--h4-heading-main-letter-spacing)",
    marginBottom: "var(--h4-heading-main-paragraph-spacing)",
    textDecoration: "var(--h4-heading-main-text-decoration)",
    textTransform: "var(--h4-heading-main-text-case)",
  },
  heading50: {
    fontFamily: "var(--h5-heading-main-font-family)",
    fontWeight: "var(--h5-heading-main-font-weight)",
    lineHeight: "var(--h5-heading-main-line-height)",
    fontSize: "var(--h5-heading-main-font-size)",
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
