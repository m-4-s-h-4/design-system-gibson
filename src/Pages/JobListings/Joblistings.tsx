import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/DisplayComponents/Header/Header";
import DisplayCard from "../../components/DisplayComponents/DisplayCard/DisplayCard";
import Card from "../../components/DisplayComponents/Card/Card";
import Input from "../../components/FormComponents/Input/InputLDefault/Input";
import Flex from "../../components/LayoutComponents/Flex/Flex";
import Stack from "../../components/LayoutComponents/Stack/Stack";
import Box from "../../components/Primatives/Box/Box";
import Overlay from "../Overlay/Overlay";
import {
  SpacingSpacing11,
  SpacingSpacing6,
  SpacingSpacing9,
} from "../../tokens/js/variables";

const Content = styled(Box)`
  padding: ${SpacingSpacing6};
  padding-top: ${SpacingSpacing11};
`;

const Joblistings: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMenuClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const cards = Array.from({ length: 8 }, (_, index) => (
    <Card
      key={index}
      buttonText="Apply"
      heading="Manufacturing Engineer"
      text="Bozeman, MT US"
      variant="primaryWithButton"
    />
  ));

  const firstHalf = cards.filter((_, index) => index < cards.length / 2);
  const secondHalf = cards.filter((_, index) => index >= cards.length / 2);

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <Overlay show={showOverlay} onClose={handleCloseOverlay} />
      <Content>
        <Flex xAlign="space-between" yAlign="flex-start">
          <DisplayCard
            heading="MAKE HISTORY AT GIBSON"
            imageSrc="https://www.fmicassets.com/sites/fender.com/features-microsite/img/careers/content-slot-14.jpg"
            paragraphs={2}
            secondText="Through a portfolio of brands that includes Fender®, Squier®, Gretsch® guitars, Jackson®, EVH® and Charvel®, our mission is to inspire every player at every stage, and we look for the same sense of passion and purpose in our employees."
            text="For timeless sound and style, nothing beats a Gibson. Since 1946, Gibson Musical Instruments Corporation (GMIC) has been tireless in its commitment to making the highest quality instruments, amps, pro-audio, accessories and digital products – and life sounds better because of it."
          />
          <Stack spacing="16px">
            <Input
              errorMessage=""
              helpTextChildren=""
              helpTextVariant="default"
              label=""
              placeholder="What type of job are you looking for?"
              type="text"
              fullWidth={true}
            />
            <Stack orientation="horizontal" spacing={SpacingSpacing9}>
              <Stack spacing={SpacingSpacing6}>{firstHalf}</Stack>
              <Stack spacing={SpacingSpacing6}>{secondHalf}</Stack>
            </Stack>
          </Stack>
        </Flex>
      </Content>
    </>
  );
};

export default Joblistings;
