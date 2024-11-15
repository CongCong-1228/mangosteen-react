import { createPortal } from "react-dom";

export const Portal: React.FC<{
  children: React.ReactNode;
  container?: HTMLElement;
}> = ({ children, container = document.body }) => {
  return createPortal(children, container || document.body);
};
