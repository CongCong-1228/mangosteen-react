import useSWRInfinite from "swr/infinite";
import { http } from "../../request/http";
import { Loading } from "../../components/Loading";

interface IProps {}

const getKey = (
  pageIndex: number,
  previousPageData: Resources<Item> | null
) => {
  console.log("pageIndex", pageIndex);
  if (previousPageData && !previousPageData.resources.length) return null; // 已经到最后一页
  return `/api/v1/items?page=${pageIndex + 1}&perPage=${10}`; // SWR key
};

export const ItemsList: React.FC<IProps> = () => {
  const { data, error, isLoading, isValidating, mutate, size, setSize } =
    useSWRInfinite(
      getKey,
      async (path) => await http.get<Resources<Item>>(path)
    );
  console.log("itemsList data", data);
  console.log("itemsList size", size);

  const loadMore = () => {
    setSize(size + 1);
  };

  if (!data) {
    return <Loading />;
  } else {
    return (
      <div>
        <ol>
          {data.map(({ resources }) =>
            resources.map((item) => (
              <li
                key={item.id}
                grid
                grid-cols="[auto_1fr_auto]"
                grid-rows-2
                px-16px
                py-8px
                gap-x-12px
                style={{ borderBottom: "1px solid #eee" }}
              >
                <div
                  row-start-1
                  col-start-1
                  row-end-3
                  col-end-2
                  text-24px
                  w-48px
                  h-48px
                  bg="#D8D8D8"
                  rounded="50%"
                  flex-center
                >
                  😘
                </div>
                <div row-start-1 col-start-2 row-end-2 col-end-3>
                  旅行
                </div>
                <div row-start-2 col-start-2 row-end-3 col-end-4 text="#999999">
                  2011年1月1日
                </div>
                <div row-start-1 col-start-3 row-end-2 col-end-4 text="#aed581">
                  ￥{item.amount}
                </div>
              </li>
            ))
          )}
        </ol>
        <div p-16px>
          <button j-btn onClick={loadMore}>
            加载更多
          </button>
        </div>
      </div>
    );
  }

  const items = data?.flatMap((item) => item.resources) || [];
  return (
    <div>
      <ol>
        {items.map((item) => (
          <li
            key={item.id}
            grid
            grid-cols="[auto_1fr_auto]"
            grid-rows-2
            px-16px
            py-8px
            gap-x-12px
            style={{ borderBottom: "1px solid #eee" }}
          >
            <div
              row-start-1
              col-start-1
              row-end-3
              col-end-2
              text-24px
              w-48px
              h-48px
              bg="#D8D8D8"
              rounded="50%"
              flex-center
            >
              😘
            </div>
            <div row-start-1 col-start-2 row-end-2 col-end-3>
              旅行
            </div>
            <div row-start-2 col-start-2 row-end-3 col-end-4 text="#999999">
              2011年1月1日
            </div>
            <div row-start-1 col-start-3 row-end-2 col-end-4 text="#aed581">
              ￥{item.amount}
            </div>
          </li>
        ))}
      </ol>
      <div p-16px>
        <button j-btn>加载更多</button>
      </div>
    </div>
  );
};
