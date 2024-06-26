import type { SVGProps } from "react";
interface SvgLanguageProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Language = ({ size = "1em", ...props }: SvgLanguageProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#language_svg__a)">
      <path
        fill="currentColor"
        d="M35.97 6C19.41 6 6 19.44 6 36s13.41 30 29.97 30C52.56 66 66 52.56 66 36S52.56 6 35.97 6m20.79 18h-8.85c-.96-3.75-2.34-7.35-4.14-10.68 5.52 1.89 10.11 5.73 12.99 10.68M36 12.12A42.3 42.3 0 0 1 41.73 24H30.27A42.3 42.3 0 0 1 36 12.12M12.78 42c-.48-1.92-.78-3.93-.78-6s.3-4.08.78-6h10.14c-.24 1.98-.42 3.96-.42 6s.18 4.02.42 6zm2.46 6h8.85c.96 3.75 2.34 7.35 4.14 10.68A23.96 23.96 0 0 1 15.24 48m8.85-24h-8.85a23.96 23.96 0 0 1 12.99-10.68c-1.8 3.33-3.18 6.93-4.14 10.68M36 59.88A42.3 42.3 0 0 1 30.27 48h11.46A42.3 42.3 0 0 1 36 59.88M43.02 42H28.98c-.27-1.98-.48-3.96-.48-6s.21-4.05.48-6h14.04c.27 1.95.48 3.96.48 6s-.21 4.02-.48 6m.75 16.68c1.8-3.33 3.18-6.93 4.14-10.68h8.85c-2.88 4.95-7.47 8.79-12.99 10.68M49.08 42c.24-1.98.42-3.96.42-6s-.18-4.02-.42-6h10.14c.48 1.92.78 3.93.78 6s-.3 4.08-.78 6z"
      />
    </g>
    <defs>
      <clipPath id="language_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Language;
