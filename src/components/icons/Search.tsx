import type { SVGProps } from "react";
interface SvgSearchProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Search = ({ size = "1em", ...props }: SvgSearchProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#search_svg__a)">
      <path
        fill="currentColor"
        d="M46.5 42h-2.37l-.84-.81C46.23 37.77 48 33.33 48 28.5 48 17.73 39.27 9 28.5 9S9 17.73 9 28.5 17.73 48 28.5 48c4.83 0 9.27-1.77 12.69-4.71l.81.84v2.37l15 14.97L61.47 57zm-18 0C21.03 42 15 35.97 15 28.5S21.03 15 28.5 15 42 21.03 42 28.5 35.97 42 28.5 42"
      />
    </g>
    <defs>
      <clipPath id="search_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Search;
