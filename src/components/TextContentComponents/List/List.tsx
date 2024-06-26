import React from "react";
import Text from "../../Primatives/Text/Text";
import styles from "../../Primatives/Text/styles";

export type ListProps = {
  type: "ordered" | "unordered";
  items: string[];
  textStyle: "bodyLarge" | "bodyMedium" | "bodySmall";
  style?: React.CSSProperties;
};

const List: React.FC<ListProps> = ({ type, items, textStyle, style }) => {
  const ListTag = type === "ordered" ? "ol" : "ul";

  const listStyle = {
    ...(style || {}),
    ...styles[textStyle],
    listStyleType: type === "ordered" ? "decimal" : "disc",
  };

  return (
    <ListTag style={listStyle}>
      {items.map((item, index) => (
        <li key={index} style={styles[textStyle]}>
          <Text as={textStyle}>{item}</Text>
        </li>
      ))}
    </ListTag>
  );
};

export default List;
