import React from "react";
import styled from "styled-components";
import {
  TokensCardDefaultBg,
  TokensCardDefaultHoverBg,
  TokensCardDefaultBorder,
  SpacingSpacing3,
  SpacingSpacing1,
} from "../../../tokens/js/variables";
import Box from "../../Primatives/Box/Box";
import Stack from "../../LayoutComponents/Stack/Stack";
import Flex from "../../LayoutComponents/Flex/Flex";
import iconMapping from "../../../assets/icons/iconMapping";
import logosMapping from "../../../assets/logos/logosMapping";
import IconOnlyButton from "../../FormComponents/Button/IconOnlyButton/IconOnlyButton";
import Badge, { BadgeProps } from "../../TextContentComponents/Badge/Badge";
import Heading from "../../TypographyComponents/Heading/Heading";

const LogoBox = styled.div`
  background-color: ${TokensCardDefaultHoverBg};
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardWrapper = styled.div`
  background-color: ${TokensCardDefaultBg};
  padding: ${SpacingSpacing3};
  display: inline-block;
  width: 260px;
  box-sizing: border-box;

  &:hover {
    background-color: ${TokensCardDefaultHoverBg};
  }

  &:hover ${LogoBox} {
    background-color: ${TokensCardDefaultBg};
  }
`;

const ImageContainer = styled(Box)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 480px;
  border: 1px solid ${TokensCardDefaultBorder};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: ${SpacingSpacing1};
  left: ${SpacingSpacing1};
  display: flex;
  flex-wrap: wrap;
  gap: ${SpacingSpacing1};
`;

export interface CardProps {
  imageSrc: string;
  icon1?: keyof typeof iconMapping;
  icon2?: keyof typeof iconMapping;
  showIcons?: boolean;
  logo?: keyof typeof logosMapping;
  badges?: (BadgeProps & { showIcon: boolean })[];
  numberOfBadges?: number;
  price?: string;
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
