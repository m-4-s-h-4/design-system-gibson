import React from "react";
import Text from "../../Primatives/Text/Text";

type ParagraphVariant = "bodyLarge" | "bodyMedium" | "bodySmall";

export interface ParagraphProps {
  variant: ParagraphVariant;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ variant, style, children }) => {
  return (
    <Text as={variant} style={style}>
      {children}
    </Text>
  );
};

export default Paragraph;
