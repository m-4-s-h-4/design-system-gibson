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
} from "../../tokens/js/variables";

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

export interface ListProps {
  ordered?: boolean;
  size?: "large" | "medium" | "small";
  children: React.ReactNode;
}

const getListStyle = (size: "large" | "medium" | "small") =>
  variantStyles[size];

const StyledList = styled.ul<{ size: "large" | "medium" | "small" }>`
  ${(props) => {
    const styles = getListStyle(props.size);
    return `
      font-family: ${styles.fontFamily};
      font-weight: ${styles.fontWeight};
      line-height: ${styles.lineHeight};
      font-size: ${styles.fontSize};
      letter-spacing: ${styles.letterSpacing};
      margin-bottom: ${styles.marginBottom};
      text-decoration: ${styles.textDecoration};
      text-transform: ${styles.textTransform};
    `;
  }}
`;

const StyledOrderedList = styled.ol<{ size: "large" | "medium" | "small" }>`
  ${(props) => {
    const styles = getListStyle(props.size);
    return `
      font-family: ${styles.fontFamily};
      font-weight: ${styles.fontWeight};
      line-height: ${styles.lineHeight};
      font-size: ${styles.fontSize};
      letter-spacing: ${styles.letterSpacing};
      margin-bottom: ${styles.marginBottom};
      text-decoration: ${styles.textDecoration};
      text-transform: ${styles.textTransform};
    `;
  }}
`;

const StyledListItem = styled.li``;

export const ListItem: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledListItem>{children}</StyledListItem>;
};

const List: React.FC<ListProps> = ({
  ordered = false,
  size = "small",
  children,
}) => {
  if (ordered) {
    return <StyledOrderedList size={size}>{children}</StyledOrderedList>;
  }
  return <StyledList size={size}>{children}</StyledList>;
};

export default List;
