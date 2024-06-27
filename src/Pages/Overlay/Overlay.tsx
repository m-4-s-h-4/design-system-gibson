import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Box from "../../components/Primatives/Box/Box";
import Button from "../../components/FormComponents/Button/Button";
import { SpacingSpacing6 } from "../../tokens/js/variables";

const OverlayWrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const OverlayContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: ${SpacingSpacing6};
  text-align: center;
`;

interface OverlayProps {
  show: boolean;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ show, onClose }) => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
    onClose();
  };

  if (!show) return null;

  return (
    <OverlayWrapper onClick={onClose}>
      <OverlayContent onClick={(e) => e.stopPropagation()}>
        <Button variant="link" onClick={() => navigateTo("/loginform")}>
          Login form
        </Button>
        <Button variant="link" onClick={() => navigateTo("/LoginFormError")}>
          Login Form Error
        </Button>
        <Button variant="link" onClick={() => navigateTo("/2FAForm")}>
          2FA form
        </Button>
        <Button variant="link" onClick={() => navigateTo("/")}>
          Job Listings
        </Button>
      </OverlayContent>
    </OverlayWrapper>
  );
};

export default Overlay;
