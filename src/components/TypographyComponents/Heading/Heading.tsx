import React from "react";
import Text from "../../Primatives/Text/Text";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

export interface HeadingProps {
  /**
   * The variant of the heading.
   * Can be one of 'h1', 'h2', 'h3', 'h4', or 'h5'.
   */
  level: HeadingLevel;
  style?: React.CSSProperties;
  /**
   * The content of the heading.
   */
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ level, style, children }) => {
  return (
    <Text as={level} style={style}>
      {children}
    </Text>
  );
};

export default Heading;
