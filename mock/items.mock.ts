import { faker } from "@faker-js/faker";
import { MockMethod } from "vite-plugin-mock";

let id = 0;
const createId = () => {
  id += 1;
  return id;
};

const create = (attrs?: Partial<Item>): Item => {
  return {
    id: createId(),
    user_id: 1,
    amount: faker.number.int({ min: 99, max: 1000 }),
    tag_ids: [1, 2],
    happen_at: faker.date.past().toISOString(),
    created_at: faker.date.past().toISOString(),
    updated_at: faker.date.past().toISOString(),
    kind: "expenses",
    ...attrs,
  };
};

const createList = (n: number, attrs?: Partial<Item>): Item[] => {
  return Array.from({ length: n }, () => create());
};

const createResource = (
  { count = 10, perPage = 10, page = 1 },
  attrs?: Partial<Item>
): Resource<Resources<Item>> => {
  const sendCount = (page - 1) * perPage;
  const left = count - sendCount;
  const resources = left > 0 ? createList(Math.min(left, perPage), attrs) : [];
  return {
    code: 0,
    data: {
      resources,
      pager: {
        page,
        per_page: perPage,
        count,
      },
    },
  };
};

export const itemsMock: MockMethod = {
  url: "/api/v1/items",
  method: "get",
  response: (query: { query: { page: number; perPage: number } }) => {
    console.log("query009999", query.query);
    return createResource({
      count: 30,
      perPage: query.query.perPage,
      page: query.query.page,
    });
  },
};
