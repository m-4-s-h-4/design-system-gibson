import type { SVGProps } from "react";
interface SvgDownProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Down = ({ size = "1em", ...props }: SvgDownProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#down_svg__a)">
      <path
        fill="currentColor"
        d="M22.23 25.77 36 39.51l13.77-13.74L54 30 36 48 18 30z"
      />
    </g>
    <defs>
      <clipPath id="down_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Down;
