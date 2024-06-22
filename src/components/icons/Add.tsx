import type { SVGProps } from "react";
interface SvgAddProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Add = ({ size = "1em", ...props }: SvgAddProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#add_svg__a)">
      <path fill="currentColor" d="M57 39H39v18h-6V39H15v-6h18V15h6v18h18z" />
    </g>
    <defs>
      <clipPath id="add_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Add;
