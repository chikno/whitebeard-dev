import type { AxiosError , AxiosResponse} from "axios";
import { createQuery } from "react-query-kit";

import { client } from "../common/client";
import type { Product } from "../types/product";

type Response = Product[];
type Variables = undefined;

export const useProducts = createQuery<Response, Variables, AxiosError>({
  queryKey: ["products"],
  fetcher: () => {
    return client.get(`/products`).then((response: AxiosResponse<Response>) => response.data?.products);
  },
});
