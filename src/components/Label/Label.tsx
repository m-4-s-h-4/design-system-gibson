import React from "react";
import styled from "styled-components";
import Text from "../Primatives/Text/Text";
import {
  SpacingSpacing0,
  TokensLabelRequired,
} from "../../tokens/js/variables";
import Stack from "../LayoutComponents/Stack/Stack";

const StyledDot = styled.span`
  color: ${TokensLabelRequired};
`;

export interface LabelProps {
  required: boolean;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ required, children }) => {
  return (
    <Stack orientation="horizontal" spacing={SpacingSpacing0}>
      {required && <StyledDot>*</StyledDot>}
      <Text as="caption">{children}</Text>
    </Stack>
  );
};

export default Label;
