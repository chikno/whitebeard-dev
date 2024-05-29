import type { AxiosError , AxiosResponse} from "axios";
import { createQuery } from "react-query-kit";

import { client } from "../common/client";
import type { Service } from "../types/types";

type Response = Service[];
type Variables = undefined;

export const useServices = createQuery<Response, Variables, AxiosError>({
  queryKey: ["services"],
  fetcher: () => {
    return client.get(`/posts`).then((response: AxiosResponse<Response>) => response.data?.posts);
  },
});
