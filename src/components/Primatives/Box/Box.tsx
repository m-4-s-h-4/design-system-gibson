import styled from "styled-components";

interface BoxProps {
  backgroundColor?: string;
  size?: string;
  fullWidth?: boolean;
}

const Box = styled.div<BoxProps>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  width: ${(props) => (props.fullWidth ? "100%" : props.size || "auto")};
  height: ${(props) => props.size || "auto"};
`;

export default Box;
