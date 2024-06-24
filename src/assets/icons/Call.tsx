import type { SVGProps } from "react";
interface SvgCallProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Call = ({ size = "1em", ...props }: SvgCallProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#call_svg__a)">
      <path
        fill="currentColor"
        d="M19.62 15c.18 2.67.63 5.28 1.35 7.77l-3.6 3.6c-1.23-3.6-2.01-7.41-2.28-11.37zM49.2 51.06c2.55.72 5.16 1.17 7.8 1.35v4.47a46.3 46.3 0 0 1-11.4-2.25zM22.5 9H12c-1.65 0-3 1.35-3 3 0 28.17 22.83 51 51 51 1.65 0 3-1.35 3-3V49.53c0-1.65-1.35-3-3-3-3.72 0-7.35-.6-10.71-1.71-.3-.12-.63-.15-.93-.15-.78 0-1.53.3-2.13.87l-6.6 6.6c-8.49-4.35-15.45-11.28-19.77-19.77l6.6-6.6a3.01 3.01 0 0 0 .75-3.06A34.1 34.1 0 0 1 25.5 12c0-1.65-1.35-3-3-3"
      />
    </g>
    <defs>
      <clipPath id="call_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Call;
