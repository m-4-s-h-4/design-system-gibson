import { useState } from "react";
import styled from "styled-components";
import Box from "../../components/Primatives/Box/Box";
import Flex from "../../components/LayoutComponents/Flex/Flex";
import Stack from "../../components/LayoutComponents/Stack/Stack";
import Button from "../../components/FormComponents/Button/Button";
import Input from "../../components/FormComponents/Input/InputLDefault/Input";
import Header from "../../components/DisplayComponents/Header/Header";
import Heading from "../../components/TypographyComponents/Heading/Heading";
import {
  TokensBaseCardBorderColor,
  SpacingSpacing6,
  TokensBaseCardBgColor,
} from "../../tokens/js/variables";
import Callout from "../../components/DisplayComponents/Callout/Callout";
import Overlay from "../Overlay/Overlay";

const CenteredBoxWrapper = styled(Box)`
  border: 1px solid ${TokensBaseCardBorderColor};
  padding: ${SpacingSpacing6};
  background-color: ${TokensBaseCardBgColor};
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: auto;
`;

const TwoFaForm = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMenuClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <Overlay show={showOverlay} onClose={handleCloseOverlay} />
      <CenteredBoxWrapper>
        <Stack spacing={SpacingSpacing6}>
          <Flex xAlign="space-between" yAlign="center">
            <Heading level="h3">One, Last Step!</Heading>
            <Button iconType="Clear" variant="icon-only" />
          </Flex>
          <Callout
            heading="Why am I seeing this?"
            text="At Gibson we care about our clients security and data and we want to make sure your account is safe with us."
            variant="special"
            fullWidth={true}
          />
          <Input
            errorMessage=""
            helpTextChildren="Please enter a number you received."
            helpTextVariant="default"
            label="SMS Code"
            placeholder="Enter code here"
            required
            showHelpText
            showLabel
            type="number"
            fullWidth={true}
          />
          <Button iconType="Clear" variant="primary">
            Confirm
          </Button>
        </Stack>
      </CenteredBoxWrapper>
    </>
  );
};

export default TwoFaForm;
