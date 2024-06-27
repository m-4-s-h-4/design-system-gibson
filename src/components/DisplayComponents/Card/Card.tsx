import React from "react";
import styled from "styled-components";

import {
  TokensBaseCardBgColor,
  TokensBaseCardBorderColor,
  TokensBaseCardDefaultText,
  SpacingSpacing6,
  SpacingSpacing2,
} from "../../../tokens/js/variables";
import Box from "../../Primatives/Box/Box";
import Stack from "../../LayoutComponents/Stack/Stack";
import Heading from "../../TypographyComponents/Heading/Heading";
import Text from "../../Primatives/Text/Text";
import Button from "../../FormComponents/Button/Button";

const CardBox = styled(Box)`
  border: 1px solid ${TokensBaseCardBorderColor};
  padding: ${SpacingSpacing6};
  background-color: ${TokensBaseCardBgColor};
  width: 320px;
  box-sizing: border-box;
`;

const StyledButton = styled(Button)`
  width: auto;
  align-self: flex-start;
`;

/**
 * Props for the Card component.
 */
export interface CardProps {
  /**
   * The variant of the card.
   * Can be 'headingOnly', 'full', 'headingWithButton', or 'primaryWithButton'.
   */
  variant: "headingOnly" | "full" | "headingWithButton" | "primaryWithButton";

  /**
   * The heading text of the card.
   */
  heading: string;

  /**
   * The main text content of the card (optional for 'headingOnly' variant).
   */
  text?: string;

  /**
   * The button text of the card (optional for variants with buttons).
   */
  buttonText?: string;
}

const Card: React.FC<CardProps> = ({
  variant,
  heading,
  text,
  buttonText = "Explore",
}) => {
  const textColor = TokensBaseCardDefaultText;

  return (
    <CardBox>
      <Stack orientation="vertical" spacing={SpacingSpacing2}>
        {(variant === "headingOnly" ||
          variant === "headingWithButton" ||
          variant === "full" ||
          variant === "primaryWithButton") && (
          <Heading level="h5" style={{ color: textColor }}>
            {heading}
          </Heading>
        )}
        {(variant === "full" || variant === "primaryWithButton") && (
          <Text as="bodyMedium" style={{ color: textColor }}>
            {text}
          </Text>
        )}
        {(variant === "headingWithButton" ||
          variant === "primaryWithButton") && (
          <Stack orientation="vertical" spacing={SpacingSpacing6}>
            <StyledButton variant="secondary">{buttonText}</StyledButton>
          </Stack>
        )}
      </Stack>
    </CardBox>
  );
};

export default Card;
