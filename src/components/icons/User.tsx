import type { SVGProps } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#user_svg__a)">
      <path d="M36 6C19.44 6 6 19.44 6 36s13.44 30 30 30 30-13.44 30-30S52.56 6 36 6M22.05 55.5C25.98 52.68 30.78 51 36 51s10.02 1.68 13.95 4.5C46.02 58.32 41.22 60 36 60s-10.02-1.68-13.95-4.5m32.37-4.14C49.35 47.4 42.96 45 36 45s-13.35 2.4-18.42 6.36C14.1 47.19 12 41.85 12 36c0-13.26 10.74-24 24-24s24 10.74 24 24c0 5.85-2.1 11.19-5.58 15.36" />
      <path d="M36 18c-5.79 0-10.5 4.71-10.5 10.5S30.21 39 36 39s10.5-4.71 10.5-10.5S41.79 18 36 18m0 15c-2.49 0-4.5-2.01-4.5-4.5S33.51 24 36 24s4.5 2.01 4.5 4.5S38.49 33 36 33" />
    </g>
    <defs>
      <clipPath id="user_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUser;
