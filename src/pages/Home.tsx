import axios from "axios";
import useSWR from "swr";
import rabbit from "../assets/images/rabbit.svg";
import add from "../assets/icons/add.svg";

export const Home: React.FC = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { isLoading, data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/1",
    fetcher
  );
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
      <button className="flex items-center justify-center w-56px h-56px rounded-50% fixed bottom-0 right-16px bg-[var(--welcome-bg-color)]">
        <img max-w="50%" max-h="50%" src={add} alt="add" />
      </button>
    </div>
  );
};
