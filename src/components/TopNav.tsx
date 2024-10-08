import { useMenuStore } from "../stores/useMenuStore";
import { Icon } from "./Icon";

interface IProps {
  title?: string;
}

export const TopNav: React.FC<IProps> = ({ title = "Yolk Accounting" }) => {
  const { visible, setVisible } = useMenuStore();

  return (
    <div className="text-[var(--text-color)] text-24px flex py-16px px-24px">
      <Icon
        name="menu"
        className="w-24px h-24px mr-16px"
        onClick={() => setVisible(!visible)}
      />
      <h1 text-24px>{title}</h1>
    </div>
  );
};
