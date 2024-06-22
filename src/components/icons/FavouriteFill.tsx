import type { SVGProps } from "react";
const SvgFavouriteFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#favouriteFill_svg__a)">
      <path
        fill="currentColor"
        d="m36 64.05-4.35-3.96C16.2 46.08 6 36.84 6 25.5 6 16.26 13.26 9 22.5 9c5.22 0 10.23 2.43 13.5 6.27C39.27 11.43 44.28 9 49.5 9 58.74 9 66 16.26 66 25.5c0 11.34-10.2 20.58-25.65 34.62z"
      />
    </g>
    <defs>
      <clipPath id="favouriteFill_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFavouriteFill;
