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

const Login = () => {
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
            <Heading level="h3">Welcome Back!</Heading>
            <Button iconType="Clear" variant="icon-only" />
          </Flex>
          <Input
            helpTextChildren="Please enter your username with no symbols"
            helpTextVariant="default"
            label="Username"
            placeholder="Username"
            required
            showHelpText
            showLabel
            type="text"
            fullWidth={true}
          />
          <Input
            helpTextChildren=""
            helpTextVariant="default"
            label="Password"
            placeholder="Enter password"
            required
            showLabel
            type="text"
            fullWidth={true}
          />
          <Button variant="primary">Login</Button>
        </Stack>
      </CenteredBoxWrapper>
    </>
  );
};

export default Login;
