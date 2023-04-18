/// <reference types="react-scripts" />

import { Ref } from "react";

declare module "*.module.css";
declare namespace JSX {
  interface IntrinsicElements {
    t: { menuItem: string; ref?: React.RefObject<HTMLInputElement> };
  }
}
