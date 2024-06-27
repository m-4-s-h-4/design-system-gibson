import React from "react";
import styled from "styled-components";

import {
  TokensBaseCardDefaultText,
  SpacingSpacing6,
  SpacingSpacing11,
} from "../../../tokens/js/variables";
import Box from "../../Primatives/Box/Box";
import Stack from "../../LayoutComponents/Stack/Stack";
import Heading from "../../TypographyComponents/Heading/Heading";
import Paragraph from "../../TypographyComponents/Paragraph/Paragraph";

const DisplayCardBox = styled(Box)`
  padding: ${SpacingSpacing6};
  padding-right: ${SpacingSpacing11};
  width: 320px;
`;

const Image = styled.img`
  width: 100%;
  height: 367px;
  object-fit: cover;
`;

export interface DisplayCardProps {
  /**
   * The heading text of the card.
   */
  heading: string;

  /**
   * The main text content of the card.
   */
  text: string;

  /**
   * The image source URL.
   */
  imageSrc: string;
}

const DisplayCard: React.FC<DisplayCardProps> = ({
  heading,
  text,
  imageSrc,
}) => {
  const textColor = TokensBaseCardDefaultText;

  return (
    <DisplayCardBox>
      <Stack orientation="vertical" spacing={SpacingSpacing6}>
        <Heading level="h2" style={{ color: textColor }}>
          {heading}
        </Heading>
        <Paragraph variant="bodyMedium" style={{ color: textColor }}>
          {text}
        </Paragraph>
        <Image src={imageSrc} alt={heading} />
      </Stack>
    </DisplayCardBox>
  );
};

export default DisplayCard;
