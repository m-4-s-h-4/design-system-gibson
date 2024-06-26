import React from "react";
import Text from "../../Primatives/Text/Text";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5";

export interface HeadingProps {
  level: HeadingLevel;
  style?: React.CSSProperties;
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
