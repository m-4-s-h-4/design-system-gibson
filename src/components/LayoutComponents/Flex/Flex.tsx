import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface FlexProps {
  grow?: number;
  shrink?: number;
  direction?: "row" | "column";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  xAlign?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  yAlign?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  gap?: string;
}

const FlexContainer = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-grow: ${(props) => props.grow ?? 0};
  flex-shrink: ${(props) => props.shrink ?? 1};
  align-items: ${(props) => props.yAlign || "stretch"};
  justify-content: ${(props) => props.xAlign || "flex-start"};
  gap: ${(props) => props.gap || "0"};
`;

const Flex: React.FC<React.PropsWithChildren<FlexProps>> = ({
  grow = 0,
  shrink = 1,
  direction = "row",
  wrap = "nowrap",
  xAlign = "flex-start",
  yAlign = "stretch",
  gap = "0",
  children,
}) => {
  return (
    <FlexContainer
      grow={grow}
      shrink={shrink}
      direction={direction}
      wrap={wrap}
      xAlign={xAlign}
      yAlign={yAlign}
      gap={gap}
    >
      {children}
    </FlexContainer>
  );
};

Flex.propTypes = {
  grow: PropTypes.number,
  shrink: PropTypes.number,
  direction: PropTypes.oneOf(["row", "column"]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  xAlign: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ]),
  yAlign: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
  ]),
  gap: PropTypes.string,
};

export default Flex;
