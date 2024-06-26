import type { SVGProps } from "react";

interface SvgStarsProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Stars = ({ size = "1em", ...props }: SvgStarsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#stars_svg__a)">
      <path d="M4 4.333a3.92 3.92 0 0 0 3 3 3.92 3.92 0 0 0-3 3 3.92 3.92 0 0 0-3-3 3.92 3.92 0 0 0 3-3M9 3.667c.218 1 1 1.782 2 2-1 .217-1.782.999-2 2-.218-1.001-1-1.783-2-2 1-.218 1.782-1 2-2M6 1.667A1.74 1.74 0 0 0 7.333 3 1.74 1.74 0 0 0 6 4.333 1.74 1.74 0 0 0 4.667 3 1.74 1.74 0 0 0 6 1.667" />
    </g>
    <defs>
      <clipPath id="stars_svg__a">
        <path fill="#fff" d="M0 0h12v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Stars;
