import useSWR from "swr";
import rabbit from "../assets/images/rabbit.svg";
import add from "../assets/icons/add.svg";
import { http } from "../request/http";
import { useTitle } from "../hooks/useTitle";
interface Props {
  title: string;
}
export const Home: React.FC<Props> = (props) => {
  console.log("document", document);
  useTitle(props.title);
  const {
    isLoading,
    data: userData,
    error,
  } = useSWR("/api/v1/me", async (path) => await http.get<User>(path));
  console.log("userData", userData);

  const { data: itemsData, error: itemsError } = useSWR(
    userData ? "/api/v1/items" : null,
    async (path) => await http.get<Resources<Item>>(path)
  );
  console.log("itemsData", itemsData);

  if (itemsData?.resources[0]) {
    console.log("itemsData", itemsData);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div>
      <div flex items-center justify-center mt-16vh mb-16vh>
        <img width={128} height={130} src={rabbit} alt="logo" />
      </div>
      <div px-16px>
        <button
          w-full
          h-48px
          className="bg-[var(--welcome-bg-color)] text-[var(--text-color)] rounded-8px p-16px text-18px"
        >
          Start Account
        </button>
      </div>
      <button className="flex items-center justify-center w-56px h-56px rounded-50% fixed bottom-0 right-16px bottom-16px bg-[var(--welcome-bg-color)]">
        <img max-w="50%" max-h="50%" src={add} alt="add" />
      </button>
    </div>
  );
};
