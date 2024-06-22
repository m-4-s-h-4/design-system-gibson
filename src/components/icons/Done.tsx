import type { SVGProps } from "react";
const SvgDone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#done_svg__a)">
      <path
        fill="currentColor"
        d="M27 48.6 14.4 36l-4.2 4.2L27 57l36-36-4.2-4.2z"
      />
    </g>
    <defs>
      <clipPath id="done_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDone;
