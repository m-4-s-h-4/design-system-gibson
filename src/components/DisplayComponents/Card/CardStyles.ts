import styled from "styled-components";
import {
  TokensCardDefaultBg,
  TokensCardDefaultHoverBg,
  TokensCardDefaultBorder,
  SpacingSpacing3,
  SpacingSpacing1,
} from "../../../tokens/js/variables";
import Box from "../../Primatives/Box/Box";

export const LogoBox = styled(Box)`
  background-color: ${TokensCardDefaultHoverBg};
  width: 120px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardWrapper = styled(Box)`
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

export const ImageContainer = styled(Box)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 480px;
  border: 1px solid ${TokensCardDefaultBorder};
`;

export const BadgeContainer = styled(Box)`
  position: absolute;
  top: ${SpacingSpacing1};
  left: ${SpacingSpacing1};
  display: flex;
  flex-wrap: wrap;
  gap: ${SpacingSpacing1};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
