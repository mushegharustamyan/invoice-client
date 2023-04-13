/// <reference types="react-scripts" />
declare module "*.module.css";
declare namespace JSX {
  interface IntrinsicElements {
    myCustomComponent: { menuItem: string };
  }
}
