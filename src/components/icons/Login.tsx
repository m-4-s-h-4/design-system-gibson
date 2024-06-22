import type { SVGProps } from "react";
const SvgLogin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#login_svg__a)">
      <path
        fill="currentColor"
        d="m33 21-4.2 4.2 7.8 7.8H6v6h30.6l-7.8 7.8L33 51l15-15zm27 36H36v6h24c3.3 0 6-2.7 6-6V15c0-3.3-2.7-6-6-6H36v6h24z"
      />
    </g>
    <defs>
      <clipPath id="login_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogin;
