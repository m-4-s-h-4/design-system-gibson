import type { SVGProps } from "react";

interface SvgSuccessProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Success = ({ size = "1em", ...props }: SvgSuccessProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.5002 6.09999L1.4002 3.99999L0.700195 4.69999L3.5002 7.49999L9.5002 1.49999L8.8002 0.799988L3.5002 6.09999Z"
      fill="#42B983"
    />
  </svg>
);

export default Success;
