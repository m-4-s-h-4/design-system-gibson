import type { SVGProps } from "react";
interface SvgVolumeOffProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const VolumeOff = ({ size = "1em", ...props }: SvgVolumeOffProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#volumeOff_svg__a)">
      <path
        fill="currentColor"
        d="m13.02 8.79-4.23 4.23L21.87 26.1 21 27H9v18h12l15 15V40.23l12.54 12.54c-1.95 1.47-4.14 2.64-6.54 3.33v6.18c4.02-.9 7.71-2.76 10.83-5.25l6.15 6.15 4.23-4.23zM30 45.51 23.49 39H15v-6h8.49l2.64-2.64L30 34.23zM57 36c0 2.46-.45 4.83-1.23 7.02l4.59 4.59C62.04 44.1 63 40.17 63 36c0-12.84-8.97-23.58-21-26.31v6.18C50.67 18.45 57 26.49 57 36M36 12l-5.64 5.64L36 23.28zm13.5 24c0-5.31-3.06-9.87-7.5-12.09v5.37l7.44 7.44c.03-.24.06-.48.06-.72"
      />
    </g>
    <defs>
      <clipPath id="volumeOff_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default VolumeOff;
