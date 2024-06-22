import type { SVGProps } from "react";
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#menu_svg__a)">
      <path
        fill="currentColor"
        d="M9 54h54v-6H9zm0-15h54v-6H9zm0-21v6h54v-6z"
      />
    </g>
    <defs>
      <clipPath id="menu_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMenu;
