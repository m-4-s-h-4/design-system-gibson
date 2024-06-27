import React from "react";
import styled from "styled-components";
import Box from "../../Primatives/Box/Box";
import Gibson from "../../../assets/logos/Gibson";
import IconOnlyButton from "../../FormComponents/Button/IconOnlyButton/IconOnlyButton";
import {
  TokensHeaderDefaultText,
  TokensHeaderBgColor,
  SpacingSpacing6,
} from "../../../tokens/js/variables";

const HeaderBox = styled(Box)`
  background-color: ${TokensHeaderBgColor};
  height: 80px;
  width: 100%;
  padding-left: ${SpacingSpacing6};
  padding-right: ${SpacingSpacing6};
  color: ${TokensHeaderDefaultText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Header: React.FC = () => {
  return (
    <HeaderBox>
      <Gibson size="63px" color={TokensHeaderDefaultText} />
      <IconOnlyButton iconType="Menu" color={TokensHeaderDefaultText} />
    </HeaderBox>
  );
};

export default Header;
