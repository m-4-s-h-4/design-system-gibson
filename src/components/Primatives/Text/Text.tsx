import React from "react";
import styles from "./styles";

type TextProps<
  T extends
    | keyof JSX.IntrinsicElements
    | "buttonSmall"
    | "buttonLarge"
    | "bodyLarge"
    | "bodyMedium"
    | "bodySmall"
    | "caption",
> = {
  as?: T;
  style?: React.CSSProperties;
  children: React.ReactNode;
} & Omit<
  JSX.IntrinsicElements[T extends keyof JSX.IntrinsicElements
    ? T
    : keyof JSX.IntrinsicElements],
  "ref"
>;

const Text = <
  T extends
    | keyof JSX.IntrinsicElements
    | "buttonSmall"
    | "buttonLarge"
    | "bodyLarge"
    | "bodyMedium"
    | "bodySmall"
    | "caption",
>({
  as,
  children,
  style,
  ...props
}: TextProps<T>) => {
  const getComponent = (type: T | undefined): React.ElementType => {
    switch (type) {
      case "buttonSmall":
      case "buttonLarge":
      case "bodyLarge":
      case "bodyMedium":
      case "bodySmall":
      case "caption":
        return type === "bodyLarge" ||
          type === "bodyMedium" ||
          type === "bodySmall"
          ? "p"
          : "div";
      default:
        return type || "p";
    }
  };

  const Component = getComponent(as);

  return (
    <Component style={{ ...(styles[as ?? "p"] || {}), ...style }} {...props}>
      {children}
    </Component>
  );
};

export default Text;
