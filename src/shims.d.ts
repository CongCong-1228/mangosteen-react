import type { AttributifyAttributes } from "@unocss/preset-attributify";

declare module "react" {
  interface HTMLAttributes<T> extends AttributifyAttributes {
    flex?: boolean;
    border?: boolean;
    justifyContent?: boolean;
    b?: string;
  }
}
