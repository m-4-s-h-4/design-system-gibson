import type { SVGProps } from "react";
interface SvgClearProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Clear = ({ size = "1em", ...props }: SvgClearProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#clear_svg__a)">
      <path
        fill="currentColor"
        d="M57 19.23 52.77 15 36 31.77 19.23 15 15 19.23 31.77 36 15 52.77 19.23 57 36 40.23 52.77 57 57 52.77 40.23 36z"
      />
    </g>
    <defs>
      <clipPath id="clear_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Clear;
