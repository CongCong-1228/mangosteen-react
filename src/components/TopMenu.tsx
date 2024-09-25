import { useMenuStore } from "../stores/useMenuStore";

export const TopMenu = () => {
  const { setVisible } = useMenuStore();

  return (
    <div fixed top-0 left-0 bg-red onClick={() => setVisible(false)}>
      TopMenu
    </div>
  );
};
