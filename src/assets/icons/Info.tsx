import type { SVGProps } from "react";

interface SvgInfoProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Info = ({ size = "1em", ...props }: SvgInfoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#Info_svg__a)">
      <path
        fill="currentColor"
        d="M8.999 5h2v2h-2zm0 3.999h2v6h-2zm1-9c-5.52 0-10 4.48-10 10s4.48 9.999 10 9.999 9.999-4.48 9.999-10S15.518 0 9.998 0m0 17.999c-4.41 0-8-3.59-8-8C2 5.59 5.59 2 10 2s7.999 3.59 7.999 7.999c0 4.41-3.59 7.999-8 7.999"
      />
    </g>
    <defs>
      <clipPath id="Info_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Info;
