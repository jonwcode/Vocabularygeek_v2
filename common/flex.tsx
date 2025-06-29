"use client";
import React, {
  JSX,
  useContext,
  forwardRef,
  type HTMLAttributes,
  type ComponentPropsWithoutRef,
  type ElementType,
} from "react";
import Context from "@/store/context";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

// All valid HTML tags like 'div' | 'form' | 'a' | ...
type ValidTags = keyof JSX.IntrinsicElements;
type deviceNames = React.CSSProperties & {
  desktop?: React.CSSProperties;
  mobile?: React.CSSProperties;
  tablet?: React.CSSProperties;
  tiny?: React.CSSProperties;
  uhd?: React.CSSProperties;
};
// Generic type to generate HTML props based on its tag
type CustomTagProps<T extends ValidTags> = {
  tag?: T | ValidTags;
  children?: React.ReactNode;
  style?: deviceNames;
  center?: boolean | undefined;
  top?: boolean | undefined;
  bottom?: boolean | undefined;
  left?: boolean | undefined;
  right?: boolean | undefined;
  middle?: boolean | undefined;
  column?: boolean | undefined;
  row?: boolean | undefined;
  pr?: string | number | undefined;
  pl?: string | number | undefined;
  pt?: string | number | undefined;
  pb?: string | number | undefined;
  p?: string | number | undefined;
  ml?: string | number | undefined;
  mr?: string | number | undefined;
  mt?: string | number | undefined;
  mb?: string | number | undefined;
  m?: string | number | undefined;
  fullWidth?: boolean | undefined;
  border?:
    | "red"
    | "blue"
    | "black"
    | "green"
    | "purple"
    | "pink"
    | "yellow"
    | string
    | boolean;
} & (ComponentPropsWithoutRef<T> & HTMLAttributes<HTMLElement>);

/**
 * Make the default tag a constant to make it easy to infer both the default
 * generic parameter and the `tag` prop
 */
const DEFAULT_TAG = "div" as const;

// Use the default `div` tag for both the generic parameter and `tag` prop
const Flex = forwardRef(function CustomTag<
  T extends ValidTags = typeof DEFAULT_TAG
>(
  {
    tag = DEFAULT_TAG,
    children,
    style,
    center,
    top,
    bottom,
    left,
    right,
    middle,
    pl,
    pr,
    pt,
    pb,
    p,
    ml,
    mr,
    mt,
    mb,
    m,
    row,
    column,
    fullWidth,
    border,
    ...rest
  }: CustomTagProps<T>,
  ref: React.Ref<HTMLElement>
): JSX.Element {
  // Grab the current stored context
  const ctx = useContext(Context);

  const { desktop, tablet, mobile, tiny, uhd } = style || ({} as deviceNames);

  // Set a border around element by color or by default
  const borderColors = [
    "red",
    "blue",
    "green",
    "pink",
    "purple",
    "aqua",
    "yellow",
    "white",
    "black",
  ];

  if (typeof border === "string") {
    if (borderColors.includes(border)) {
      border = "1px solid " + border;
    } /* else {
			border = border;
		} */
  } else if (typeof border === "boolean") {
    border = "1px solid red";
  }

  // Render the custom tag with props using `React.createElement`
  return React.createElement(
    tag as ElementType,
    {
      ref,
      style: {
        display: "flex",
        ...style,
        ...(border && { border }),
        ...(fullWidth && { width: "100%" }),
        ...(column && { flexDirection: "column" }),
        ...(row && { flexDirection: "row" }),
        ...(pr && { paddingRight: pr }),
        ...(pl && { paddingLeft: pl }),
        ...(pt && { paddingTop: pt }),
        ...(pb && { paddingBottom: pb }),
        ...(p && { padding: p }),
        ...(ml && { marginLeft: ml }),
        ...(mr && { marginRight: mr }),
        ...(mt && { marginTop: mt }),
        ...(mb && { marginBottom: mb }),
        ...(m && { margin: m }),
        ...(center && { alignItems: "center" }),
        ...(center && !top && { justifyContent: "center" }),
        ...(top && { alignContent: "start", alignItems: "flex-start" }),
        ...(bottom && !middle && { alignItems: "flex-end" }),
        ...(middle && { alignContent: "center", alignItems: "center" }),
        ...(left && { justifyContent: "flex-start" }),
        ...(right && { justifyContent: "flex-end" }),
        ...(ctx.deviceInfo?.deviceName === "desktop" && { ...desktop }),
        ...(ctx.deviceInfo?.deviceName === "mobile" && { ...mobile }),
        ...(ctx.deviceInfo?.deviceName === "tablet" && { ...tablet }),
        ...(ctx.deviceInfo?.deviceName === "tiny" && { ...tiny }),
        ...(ctx.deviceInfo?.deviceName === "uhd" && { ...uhd }),
      },
      ...rest,
    },
    children
  );
});

export default Flex;
