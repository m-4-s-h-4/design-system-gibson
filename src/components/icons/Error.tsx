import type { SVGProps } from "react";

interface SvgErrorProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Error = ({ size = "1em", ...props }: SvgErrorProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 6.50005H5.5V7.50005H4.5V6.50005ZM4.5 2.50005H5.5V5.50005H4.5V2.50005ZM4.995 4.57764e-05C2.235 4.57764e-05 0 2.24005 0 5.00005C0 7.76005 2.235 10 4.995 10C7.76 10 10 7.76005 10 5.00005C10 2.24005 7.76 4.57764e-05 4.995 4.57764e-05ZM5 9.00005C2.79 9.00005 1 7.21005 1 5.00005C1 2.79005 2.79 1.00005 5 1.00005C7.21 1.00005 9 2.79005 9 5.00005C9 7.21005 7.21 9.00005 5 9.00005Z"
      fill="#EC2020"
    />
  </svg>
);

export default Error;
