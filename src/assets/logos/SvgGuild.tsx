import type { SVGProps } from "react";
interface SvgSvgGuildProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const SvgGuild = ({ size = "1em", ...props }: SvgSvgGuildProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 31"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.778 3.355c.05 2.525.15 3.45.4 3.55.25.075.3-.65.25-3.35-.05-2.525-.15-3.45-.4-3.55-.25-.075-.3.65-.25 3.35M6.903 1.03c-.05.175-.125 1.6-.15 3.15-.05 2.6-.1 2.875-.6 3.3-1.075.875-1.175.675-1.175-2.3 0-2.1-.075-2.75-.3-2.675-.25.1-.325.925-.325 3.075 0 3.6.2 3.875 1.9 2.725l1.1-.75.075-3.425C7.453 2.155 7.403.705 7.253.705c-.125 0-.275.15-.35.325M10.728 4.63v3.45l1.125.725c.625.375 1.2.65 1.275.6.25-.25-.175-.85-.9-1.25s-.75-.5-.8-2.25c-.05-1.6-.125-3.45-.175-4.4-.025-.15-.125-.3-.275-.3s-.25 1.3-.25 3.425M14.228 6.88v3.45l.875.6c1.875 1.275 2.45.55 2.3-2.95-.075-2.275-.1-2.375-.85-3-.425-.35-1.125-.85-1.55-1.1l-.775-.45zm1.85-1.4c.625.475.65.625.65 2.725 0 1.275-.1 2.3-.25 2.375-.15.1-.55-.025-.875-.225-.6-.4-.625-.525-.625-2.9 0-1.375.1-2.5.225-2.5.1 0 .5.225.875.525M1.403 4.48C.753 4.93.153 5.505.078 5.805c-.05.275-.1 1.7-.05 3.15.075 3.025.3 3.275 1.95 2.125.9-.625.95-.75 1.05-2.175.025-.825 0-1.55-.125-1.625-.275-.175-1.7.925-1.525 1.2.075.125.35.175.625.1.4-.125.475-.025.475.575 0 .7-.8 1.55-1.5 1.55-.15 0-.25-.925-.25-2.475 0-2.35.025-2.475.625-2.875.775-.5 1.125-.5 1.125 0 0 .2.125.3.25.225.3-.175.35-1.875.075-1.875-.125 0-.725.35-1.4.775M5.853 10.93l-2.5 1.7.125 1.8c.075 1 .075 1.85.025 1.925-.05.05-.875.1-1.825.1-2 0-1.95-.1-1.2 2.875.575 2.275 1.8 4.6 3.55 6.825 1.25 1.575 4.25 4.3 4.725 4.3.15 0 1.425-1.15 2.825-2.575 1.75-1.725 2.875-3.1 3.525-4.25 1.075-1.975 2.125-5.05 2.125-6.3v-.875h-5.75c-4.4 0-5.8-.075-5.875-.325-.075-.15-.15-.8-.175-1.4-.075-1.1-.05-1.125 1.425-2.175.825-.6 1.625-1.075 1.775-1.1.175 0 .975.45 1.825 1.025 1.175.775 1.525 1.15 1.525 1.625 0 .525.1.6 1 .6h1V12.58l-2.575-1.7c-1.425-.925-2.675-1.675-2.8-1.65-.15 0-1.375.775-2.75 1.7m.525 8.275c.725 1.875 2.05 4.05 2.425 3.925.25-.075 2.175-3.125 2.175-3.45 0-.125-.6-.225-1.3-.275l-1.325-.075-.075-.95-.075-.925h2.625c3.05 0 2.95-.1 2.075 2.325-.75 2.075-1.65 3.575-3.025 5.075l-1.1 1.225-1.05-1c-.575-.55-1.425-1.65-1.925-2.475-.925-1.5-2.1-4.625-1.9-4.975.075-.1.525-.175 1-.125.825.075.9.15 1.475 1.7"
    />
  </svg>
);
export default SvgGuild;
