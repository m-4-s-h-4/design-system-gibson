import type { SVGProps } from "react";
interface SvgPaymentProps extends SVGProps<SVGSVGElement> {
  size?: string;
}

const Payment = ({ size = "1em", ...props }: SvgPaymentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <g clipPath="url(#payment_svg__a)">
      <path
        fill="currentColor"
        d="M60 12H12c-3.33 0-5.97 2.67-5.97 6L6 54c0 3.33 2.67 6 6 6h48c3.33 0 6-2.67 6-6V18c0-3.33-2.67-6-6-6m0 42H12V36h48zm0-30H12v-6h48z"
      />
    </g>
    <defs>
      <clipPath id="payment_svg__a">
        <path fill="#fff" d="M0 0h72v72H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Payment;
