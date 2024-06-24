import type { SVGProps } from "react";

interface SvgWarningProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Warning = ({ size = "1em", ...props }: SvgWarningProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 12 11"
    fill="none"
    {...props}
  >
    <g clipPath="url(#warning_svg__a)">
      <path
        fill="currentColor"
        d="M6.4574 2.49234L10.5094 9.49327H2.40536L6.4574 2.49234ZM6.4574 0.345245L0.538086 10.5695H12.3767L6.4574 0.345245ZM6.99551 7.87891H5.91928V8.95515H6.99551V7.87891ZM6.99551 4.6502H5.91928V6.80267H6.99551V4.6502Z"
      />
    </g>
    <defs>
      <clipPath id="warning_svg__a">
        <path fill="#fff" d="M0 0h12v11H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Warning;
