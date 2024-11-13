import { Icon } from "./Icon";

export const AddItemFloatButton: React.FC = () => {
  return (
    <button className="flex-center w-56px h-56px rounded-50% fixed bottom-0 right-16px bottom-16px bg-[var(--welcome-bg-color)]">
      <Icon className="h-36px w-36px color-[var(--text-color)]" name="add" />
    </button>
  );
};
