import type { SVGProps } from "react";
const SvgFavourite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#favourite_svg__a)">
      <path
        fill="currentColor"
        d="M49.5 9c-5.22 0-10.23 2.43-13.5 6.27C32.73 11.43 27.72 9 22.5 9 13.26 9 6 16.26 6 25.5c0 11.34 10.2 20.58 25.65 34.62L36 64.05l4.35-3.96C55.8 46.08 66 36.84 66 25.5 66 16.26 58.74 9 49.5 9M36.3 55.65l-.3.3-.3-.3C21.42 42.72 12 34.17 12 25.5c0-6 4.5-10.5 10.5-10.5 4.62 0 9.12 2.97 10.71 7.08h5.61C40.38 17.97 44.88 15 49.5 15c6 0 10.5 4.5 10.5 10.5 0 8.67-9.42 17.22-23.7 30.15"
      />
    </g>
    <defs>
      <clipPath id="favourite_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFavourite;
