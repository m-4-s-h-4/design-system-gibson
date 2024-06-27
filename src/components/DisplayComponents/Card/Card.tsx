import React from "react";
import { SpacingSpacing3, SpacingSpacing1 } from "../../../tokens/js/variables";
import Stack from "../../LayoutComponents/Stack/Stack";
import Flex from "../../LayoutComponents/Flex/Flex";
import iconMapping from "../../../assets/icons/iconMapping";
import logosMapping from "../../../assets/logos/logosMapping";
import IconOnlyButton from "../../FormComponents/Button/IconOnlyButton/IconOnlyButton";
import Badge, { BadgeProps } from "../../TextContentComponents/Badge/Badge";
import Heading from "../../TypographyComponents/Heading/Heading";
import {
  LogoBox,
  CardWrapper,
  ImageContainer,
  BadgeContainer,
  Image,
} from "./CardStyles";
import Box from "../../Primatives/Box/Box";

/**
 * Props for the Card component.
 */
export interface CardProps {
  /**
   * The source URL of the image to display in the card.
   */
  imageSrc: string;

  /**
   * The type of the first icon to display.
   * Can be any key from the iconMapping object.
   */
  icon1?: keyof typeof iconMapping;

  /**
   * The type of the second icon to display.
   * Can be any key from the iconMapping object.
   */
  icon2?: keyof typeof iconMapping;

  /**
   * Determines whether to show icons.
   * @default false
   */
  showIcons?: boolean;

  /**
   * The logo to display on the card.
   * Can be any key from the logosMapping object.
   */
  logo?: keyof typeof logosMapping;

  /**
   * The badges to display on the card.
   * Each badge should include a variant and a showIcon property.
   */
  badges?: (BadgeProps & { showIcon: boolean })[];

  /**
   * The number of badges to display.
   * @default 0
   */
  numberOfBadges?: number;

  /**
   * The price text to display on the card.
   */
  price?: string;

  /**
   * The about text to display on the card.
   */
  aboutText?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  icon1,
  icon2,
  showIcons = true,
  logo = "Furch",
  badges = [],
  numberOfBadges = 4,
  price = "Gibson Custom Les Paul",
  aboutText = "$9,999",
}) => {
  const LogoComponent = logosMapping[logo];

  return (
    <CardWrapper>
      <Stack spacing={SpacingSpacing3}>
        <ImageContainer>
          <BadgeContainer>
            {badges.slice(0, numberOfBadges).map((badge, index) => (
              <Badge
                key={index}
                variant={badge.variant}
                showIcon={badge.showIcon}
              >
                {badge.children}
              </Badge>
            ))}
          </BadgeContainer>
          <Image src={imageSrc} alt="Guitar image" />
        </ImageContainer>
        <Box fullWidth>
          <Flex xAlign="space-between" yAlign="center">
            <LogoBox>
              <LogoComponent />
            </LogoBox>
            {showIcons && (
              <Flex
                direction="row"
                xAlign="flex-end"
                yAlign="center"
                gap={SpacingSpacing1}
              >
                {icon1 && <IconOnlyButton iconType={icon1} />}
                {icon2 && <IconOnlyButton iconType={icon2} />}
              </Flex>
            )}
          </Flex>
        </Box>
        <Box fullWidth>
          <Stack spacing={SpacingSpacing1}>
            <Heading level="h5">{aboutText}</Heading>
            <Heading level="h4">{price}</Heading>
          </Stack>
        </Box>
      </Stack>
    </CardWrapper>
  );
};

export default Card;
