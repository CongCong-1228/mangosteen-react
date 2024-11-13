import { ReactNode } from "react";
import { useMenuStore } from "../stores/useMenuStore";
import { Icon } from "./Icon";

interface IProps {
  title?: string;
  icon?: ReactNode;
}

export const TopNav: React.FC<IProps> = ({
  title = "Yolk Accounting",
  icon,
}) => {
  return (
    <div className="text-[var(--text-color)] text-24px flex py-16px px-24px items-center">
      {icon}
      <h1 text-24px>{title}</h1>
    </div>
  );
};
