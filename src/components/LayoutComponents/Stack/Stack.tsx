import React from "react";
import styled from "styled-components";

export interface StackProps {
  orientation?: "vertical" | "horizontal";
  spacing?: string;
}

const StackWrapper = styled.div<StackProps>`
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
