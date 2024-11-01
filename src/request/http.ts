import axios from "axios";

const baseURL = isDev ? "/" : "https://jsonplaceholder.typicode.com";
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 10000;
axios.defaults.headers.common["Content-Type"] = "application/json";

export const http = {
  get<T>(url: string): Promise<T> {
    return new Promise((resolve, reject) => {
      axios
        .get<Resource<T>>(url)
        .then((response) => {
          const { data } = response.data;
          console.log("data000000", response.data);
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(url: string, data: any) {
    return axios.post(url, data);
  },
  patch(url: string, data: any) {
    return axios.patch(url, data);
  },
  delete(url: string) {
    return axios.delete(url);
  },
};
