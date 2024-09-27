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
    amount: faker.number.int({ min: 99, max: 1000_00 }),
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
): Resources<Item> => {
  const sendCount = (page - 1) * perPage;
  const left = count - sendCount;
  const resources = left > 0 ? createList(Math.min(left, perPage), attrs) : [];
  return {
    resources,
    pager: {
      page,
      per_page: perPage,
      count,
    },
  };
};

export const itemsMock: MockMethod = {
  url: "/api/v1/items",
  method: "get",
  response: (query: { page: string }) => {
    return createResource({
      count: 100,
      perPage: 10,
      page: parseInt(query.page),
    });
  },
};
