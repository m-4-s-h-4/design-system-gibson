import React from "react";
import styled from "styled-components";
import {
  TokensCardDefaultBg,
  TokensCardDefaultHoverBg,
  TokensCardDefaultBorder,
  SpacingSpacing3,
  SpacingSpacing1,
} from "../../../tokens/js/variables";
import Box from "../../Box/Box";
import Stack from "../../LayoutComponents/Stack/Stack";
import Flex from "../../LayoutComponents/Flex/Flex";
import Paragraph from "../../TypographyComponents/Paragraph/Paragraph";
import { Heading5 } from "../../TypographyComponents/Heading/Heading.stories";
import iconMapping from "../../../assets/icons/iconMapping";
import logosMapping from "../../../assets/logos/logosMapping";
import IconOnlyButton from "../../FormComponents/Button/IconOnlyButton/IconOnlyButton";

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
  border: 1px solid ${TokensCardDefaultBorder};
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

export interface CardProps {
  imageSrc: string;
  icon1?: keyof typeof iconMapping;
  icon2?: keyof typeof iconMapping;
  showIcons?: boolean;
  logo?: keyof typeof logosMapping;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  icon1,
  icon2,
  showIcons = true,
  logo = "Furch",
}) => {
  const LogoComponent = logosMapping[logo];

  return (
    <CardWrapper>
      <Stack spacing={SpacingSpacing3}>
        <ImageContainer>
          <Image src={imageSrc} alt="Gibson Custom Les Paul image" />
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
            <Paragraph variant="medium">Gibson Custom Les Paul</Paragraph>
            <Heading5 as="h5" variant="heading50">
              $9,999
            </Heading5>
          </Stack>
        </Box>
      </Stack>
    </CardWrapper>
  );
};

export default Card;
