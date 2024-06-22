import type { SVGProps } from "react";

interface SvgNextProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const SvgNext = ({ size = "1em", ...props }: SvgNextProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#next_svg__a)">
      <path
        fill="currentColor"
        d="m30 18-4.23 4.23L39.51 36 25.77 49.77 30 54l18-18z"
      />
    </g>
    <defs>
      <clipPath id="next_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgNext;
