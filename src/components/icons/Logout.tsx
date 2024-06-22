import type { SVGProps } from "react";
const SvgLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#logout_svg__a)">
      <path
        fill="currentColor"
        d="m51 24-4.23 4.23L51.51 33H27v6h24.51l-4.74 4.74L51 48l12-12zm-36-9h21V9H15c-3.3 0-6 2.7-6 6v42c0 3.3 2.7 6 6 6h21v-6H15z"
      />
    </g>
    <defs>
      <clipPath id="logout_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogout;
