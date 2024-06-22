import type { SVGProps } from "react";
interface SvgDeleteProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Delete = ({ size = "1em", ...props }: SvgDeleteProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#delete_svg__a)">
      <path
        fill="currentColor"
        d="M48 27v30H24V27zM43.5 9h-15l-3 3H15v6h42v-6H46.5zM54 21H18v36c0 3.3 2.7 6 6 6h24c3.3 0 6-2.7 6-6z"
      />
    </g>
    <defs>
      <clipPath id="delete_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Delete;
