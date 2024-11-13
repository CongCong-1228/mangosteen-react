import useSWRInfinite from "swr/infinite";
import { http } from "../../request/http";
import { Loading } from "@/components/common/Loading";
import styled from "styled-components";

interface IProps {}

const Div = styled.div`
  padding: 16px;
  text-align: center;
`;

const getKey = (
  pageIndex: number,
  previousPageData: Resources<Item> | null
) => {
  if (previousPageData && !previousPageData.resources.length) return null; // 已经到最后一页
  return `/api/v1/items?page=${pageIndex + 1}&perPage=${10}`; // SWR key
};

export const ItemsList: React.FC<IProps> = () => {
  const { data, error, isLoading, isValidating, mutate, size, setSize } =
    useSWRInfinite(
      getKey,
      async (path) => await http.get<Resources<Item>>(path),
      {
        revalidateFirstPage: false,
      }
    );

  const loadMore = () => {
    setSize(size + 1);
  };

  if (!data) {
    return (
      <div>
        {error && <Div>数据加载失败，请刷新页面</Div>}
        {isLoading && <Div>数据加载中...</Div>}
      </div>
    );
  } else {
    const last = data[data.length - 1];
    const { page, per_page, count } = last.pager;
    const hasMore = (page - 1) * per_page + last.resources.length < count;
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
        {error && <Div>数据加载失败，请刷新页面</Div>}
        {!hasMore ? (
          <Div>没有更多数据了</Div>
        ) : isLoading ? (
          <Div>加载中...</Div>
        ) : (
          <Div>
            <button j-btn onClick={loadMore}>
              加载更多
            </button>
          </Div>
        )}
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
