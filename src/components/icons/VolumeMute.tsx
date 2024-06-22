import type { SVGProps } from "react";
const SvgVolumeMute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#volumeMute_svg__a)">
      <path
        fill="currentColor"
        d="M42 26.49v19.02L35.49 39H27v-6h8.49zM48 12 33 27H21v18h12l15 15z"
      />
    </g>
    <defs>
      <clipPath id="volumeMute_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVolumeMute;
