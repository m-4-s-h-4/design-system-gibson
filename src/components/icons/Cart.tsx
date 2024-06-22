import type { SVGProps } from "react";
const SvgCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#cart_svg__a)">
      <path
        fill="currentColor"
        d="M46.65 39c2.25 0 4.23-1.23 5.25-3.09l10.74-19.47c1.11-1.98-.33-4.44-2.61-4.44h-44.4l-2.82-6H3v6h6l10.8 22.77-4.05 7.32C13.56 46.11 16.44 51 21 51h36v-6H21l3.3-6zM18.48 18h36.45l-8.28 15H25.59zM21 54c-3.3 0-5.97 2.7-5.97 6s2.67 6 5.97 6 6-2.7 6-6-2.7-6-6-6m30 0c-3.3 0-5.97 2.7-5.97 6s2.67 6 5.97 6 6-2.7 6-6-2.7-6-6-6"
      />
    </g>
    <defs>
      <clipPath id="cart_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCart;
