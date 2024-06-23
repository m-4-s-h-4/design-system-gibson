import styled from "styled-components";

interface BoxProps {
  backgroundColor?: string;
  size?: string;
}

const Box = styled.div<BoxProps>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  width: ${(props) => props.size || "auto"};
  height: ${(props) => props.size || "auto"};
`;

export default Box;
