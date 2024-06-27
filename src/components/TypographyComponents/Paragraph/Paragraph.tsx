import React from "react";
import Text from "../../Primatives/Text/Text";

type ParagraphVariant = "bodyLarge" | "bodyMedium" | "bodySmall";

export interface ParagraphProps {
  /**
   * The variant of the paragraph.
   * Can be one of 'bodyLarge', 'bodyMedium', or 'bodySmall'.
   */
  variant: ParagraphVariant;
  style?: React.CSSProperties;
  /**
   * The content of the paragraph.
   */
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
