import type { SVGProps } from "react";
interface SvgMailProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Mail = ({ size = "1em", ...props }: SvgMailProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#mail_svg__a)">
      <path
        fill="currentColor"
        d="M60 12H12c-3.3 0-5.97 2.7-5.97 6L6 54c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V18c0-3.3-2.7-6-6-6m0 42H12V24l24 15 24-15zM36 33 12 18h48z"
      />
    </g>
    <defs>
      <clipPath id="mail_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Mail;
