import React from "react";
import styled from "styled-components";

import {
  TokensCalloutBgColor,
  TokensCalloutBorderColor,
  TokensCalloutDefaultText,
  TokensCalloutSuccessText,
  TokensCalloutWarningText,
  TokensCalloutErrorText,
  TokensCalloutSpecialText,
  SpacingSpacing6,
  SpacingSpacing3,
  SpacingSpacing2,
  FontSizeMediumIcon,
} from "../../../tokens/js/variables";
import Stack from "../../LayoutComponents/Stack/Stack";
import Heading from "../../TypographyComponents/Heading/Heading";
import Text from "../../Primatives/Text/Text";
import Box from "../../Primatives/Box/Box";
import WarningIcon from "../../../assets/icons/Warning";
import SuccessIcon from "../../../assets/icons/Success";
import ErrorIcon from "../../../assets/icons/Error";
import StarsIcon from "../../../assets/icons/Stars";
import InfoIcon from "../../../assets/icons/Info";

const CalloutBox = styled(Box)`
  border: 1px solid ${TokensCalloutBorderColor};
  padding: ${SpacingSpacing6};
  background-color: ${TokensCalloutBgColor};
  width: 320px;
`;

const IconWrapper = styled(Box)`
  font-size: ${FontSizeMediumIcon};
`;

const getTextColor = (variant: CalloutProps["variant"]) => {
  switch (variant) {
    case "success":
      return TokensCalloutSuccessText;
    case "warning":
      return TokensCalloutWarningText;
    case "error":
      return TokensCalloutErrorText;
    case "special":
      return TokensCalloutSpecialText;
    default:
      return TokensCalloutDefaultText;
  }
};

const getIcon = (variant: CalloutProps["variant"]) => {
  switch (variant) {
    case "success":
      return <SuccessIcon />;
    case "warning":
      return <WarningIcon />;
    case "error":
      return <ErrorIcon />;
    case "special":
      return <StarsIcon />;
    default:
      return <InfoIcon />;
  }
};

export interface CalloutProps {
  variant?: "default" | "success" | "warning" | "error" | "special";
  heading: string;
  text: string;
}

const Callout: React.FC<CalloutProps> = ({
  variant = "default",
  heading,
  text,
}) => {
  const textColor = getTextColor(variant);
  const Icon = getIcon(variant);

  return (
    <CalloutBox>
      <Stack orientation="horizontal" spacing={SpacingSpacing3}>
        <IconWrapper style={{ color: textColor }}>{Icon}</IconWrapper>
        <Stack orientation="vertical" spacing={SpacingSpacing2}>
          <Heading level="h5" style={{ color: textColor }}>
            {heading}
          </Heading>
          <Text as="bodyMedium" style={{ color: textColor }}>
            {text}
          </Text>
        </Stack>
      </Stack>
    </CalloutBox>
  );
};

export default Callout;
