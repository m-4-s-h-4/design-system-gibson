import type { SVGProps } from "react";
interface SvgVolumeOnProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const VolumeOn = ({ size = "1em", ...props }: SvgVolumeOnProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#volumeOn_svg__a)">
      <path
        fill="currentColor"
        d="M9 27v18h12l15 15V12L21 27zm21-.51v19.02L23.49 39H15v-6h8.49zM49.5 36c0-5.31-3.06-9.87-7.5-12.09v24.15c4.44-2.19 7.5-6.75 7.5-12.06M42 9.69v6.18C50.67 18.45 57 26.49 57 36s-6.33 17.55-15 20.13v6.18C54.03 59.58 63 48.84 63 36S54.03 12.42 42 9.69"
      />
    </g>
    <defs>
      <clipPath id="volumeOn_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default VolumeOn;
