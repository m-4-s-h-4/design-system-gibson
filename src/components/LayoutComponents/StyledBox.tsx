import React from "react";
import Box from "../Primatives/Box/Box";
import {
  SpacingSpacing16,
  TokensColorSecondaryRedRedDark,
} from "../../tokens/js/variables";

const StyledBox: React.FC = () => {
  return (
    <Box
      backgroundColor={TokensColorSecondaryRedRedDark}
      size={SpacingSpacing16}
    />
  );
};

export default StyledBox;
