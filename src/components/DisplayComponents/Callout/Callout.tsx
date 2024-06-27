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

const CalloutBox = styled(Box)<{ fullWidth?: boolean }>`
  border: 1px solid ${TokensCalloutBorderColor};
  padding: ${SpacingSpacing6};
  background-color: ${TokensCalloutBgColor};
  width: ${(props) => (props.fullWidth ? "100%" : "320px")};
  box-sizing: border-box;
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

/**
 * Props for the Callout component.
 */
export interface CalloutProps {
  /**
   * The variant of the callout.
   * Can be 'default', 'success', 'warning', 'error', or 'special'.
   * @default "default"
   */
  variant?: "default" | "success" | "warning" | "error" | "special";

  /**
   * The heading text of the callout.
   */
  heading: string;

  /**
   * The main text content of the callout.
   */
  text: string;

  /**
   * Whether the callout should be full width.
   * @default false
   */
  fullWidth?: boolean;
}

const Callout: React.FC<CalloutProps> = ({
  variant = "default",
  heading,
  text,
  fullWidth = false,
}) => {
  const textColor = getTextColor(variant);
  const Icon = getIcon(variant);

  return (
    <CalloutBox fullWidth={fullWidth}>
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
