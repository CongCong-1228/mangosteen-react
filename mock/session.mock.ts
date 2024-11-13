import type { MockMethod } from "vite-plugin-mock";

export const sessionMock: MockMethod = {
  url: "/api/v1/session",
  method: "post",
  response: (): Resource<{ jwt: string }> => {
    return {
      code: 0,
      data: {
        jwt: "123xxxx",
      },
    };
  },
};
