import type { SVGProps } from "react";
const SvgBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#back_svg__a)">
      <path
        fill="currentColor"
        d="M46.23 49.77 32.49 36l13.74-13.77L42 18 24 36l18 18z"
      />
    </g>
    <defs>
      <clipPath id="back_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBack;
