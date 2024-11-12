import useSWR from "swr";
import rabbit from "@/assets/images/rabbit.svg";
import add from "@/assets/icons/add.svg";
import { http } from "@/request/http";
import { useTitle } from "@/hooks/useTitle";
import { Navigate } from "react-router-dom";
import { Loading } from "@/components/Loading";
import { Icon } from "@/components/Icon";
import { AddItemFloatButton } from "@/components/AddItemFloatButton";
interface Props {
  title: string;
}
export const Home: React.FC<Props> = (props) => {
  useTitle(props.title);

  const {
    isLoading: isUserLoading,
    data: userData,
    error: userError,
  } = useSWR("/api/v1/me", async (path) => await http.get<User>(path));

  const {
    data: itemsData,
    error: itemsError,
    isLoading: isItemsLoading,
  } = useSWR(
    userData ? "/api/v1/items?page=1" : null,
    async (path) => await http.get<Resources<Item>>(path)
  );

  // if (itemsData?.resources[0]) {
  //   return <Navigate to="/items" />;
  // }

  if (isUserLoading || isItemsLoading) return <Loading className="h-screen" />;

  if (userError || itemsError) return <div>Error</div>;

  return (
    // <div h-full>
    <div
      px-16px
      h-full
      flex
      items-center
      justify-center
      flex-col
      className="bg-[var(--primary-color)]"
    >
      <img width={128} height={130} src={rabbit} alt="logo" />
      <h1 mb-20 mt-10 font-700 className="text-[var(--text-color)]">
        Welcome!
      </h1>
      <button
        w-full
        h-48px
        className="bg-[var(--welcome-bg-color)] text-[var(--text-color)] rounded-8px p-16px text-18px flex items-center justify-center"
      >
        Start Account
      </button>
    </div>
  );
};
