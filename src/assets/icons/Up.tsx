import type { SVGProps } from "react";
interface SvgUpProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Up = ({ size = "1em", ...props }: SvgUpProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#up_svg__a)">
      <path
        fill="currentColor"
        d="M22.23 46.23 36 32.49l13.77 13.74L54 42 36 24 18 42z"
      />
    </g>
    <defs>
      <clipPath id="up_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Up;
