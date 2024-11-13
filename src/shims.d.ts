import type { AttributifyAttributes } from "@unocss/preset-attributify";

declare module "react" {
  interface HTMLAttributes<T> extends AttributifyAttributes {
    flex?: boolean | "center";
    border?: boolean;
    justifyContent?: boolean;
    b?: string;
    grid?: boolean;
    gridCols?: string;
    gridRows?: string;
  }
}
