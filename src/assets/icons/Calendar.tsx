import type { SVGProps } from "react";
interface SvgCalendarProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Calendar = ({ size = "1em", ...props }: SvgCalendarProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#calendar_svg__a)">
      <path
        fill="currentColor"
        d="M57 12h-3V6h-6v6H24V6h-6v6h-3c-3.33 0-5.97 2.7-5.97 6L9 60c0 3.3 2.67 6 6 6h42c3.3 0 6-2.7 6-6V18c0-3.3-2.7-6-6-6m0 48H15V30h42zm0-36H15v-6h42zM27 42h-6v-6h6zm12 0h-6v-6h6zm12 0h-6v-6h6zM27 54h-6v-6h6zm12 0h-6v-6h6zm12 0h-6v-6h6z"
      />
    </g>
    <defs>
      <clipPath id="calendar_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Calendar;
