import React from "react";
import styled from "styled-components";
import Box from "../../Primatives/Box/Box";

/**
 * Props for the Stack component.
 */
export interface StackProps {
  /**
   * The orientation of the stack.
   * Determines if the items are arranged vertically or horizontally.
   * @default "vertical"
   */
  orientation?: "vertical" | "horizontal";

  /**
   * The spacing between the items in the stack.
   * Can be any valid CSS size value .
   */
  spacing?: string;
}

const StackWrapper = styled(Box)<StackProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.orientation === "horizontal" ? "row" : "column"};
  gap: ${(props) => props.spacing};
`;

const Stack: React.FC<React.PropsWithChildren<StackProps>> = ({
  orientation = "vertical",
  spacing = "",
  children,
}) => {
  return (
    <StackWrapper orientation={orientation} spacing={spacing}>
      {children}
    </StackWrapper>
  );
};

export default Stack;
