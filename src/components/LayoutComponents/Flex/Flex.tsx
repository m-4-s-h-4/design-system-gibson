import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Box from "../../Primatives/Box/Box";

/**
 * Props for the Flex component.
 */
export interface FlexProps {
  /**
   * The flex-grow property specifies how much the item will grow relative to the rest of the flexible items inside the same container.
   * @default 0
   */
  grow?: number;

  /**
   * The flex-shrink property specifies how the item will shrink relative to the rest of the flexible items inside the same container.
   * @default 1
   */
  shrink?: number;

  /**
   * The flex-direction property specifies the direction of the flexible items.
   * Can be 'row' or 'column'.
   * @default "row"
   */
  direction?: "row" | "column";

  /**
   * The flex-wrap property specifies whether the flexible items should wrap or not.
   * Can be 'nowrap', 'wrap', or 'wrap-reverse'.
   * @default "nowrap"
   */
  wrap?: "nowrap" | "wrap" | "wrap-reverse";

  /**
   * The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis.
   * Can be 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', or 'space-evenly'.
   * @default "flex-start"
   */
  xAlign?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  /**
   * The align-items property aligns the flexible container's items when the items do not use all available space on the cross-axis.
   * Can be 'stretch', 'flex-start', 'flex-end', 'center', or 'baseline'.
   * @default "stretch"
   */
  yAlign?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";

  /**
   * The gap property specifies the gaps (gutters) between flex items.
   * Can be any valid CSS size value.
   */
  gap?: string;
}

const FlexContainer = styled(Box)<FlexProps>`
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
