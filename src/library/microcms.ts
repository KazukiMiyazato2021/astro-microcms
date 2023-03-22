//SDK利用準備
import { createClient, MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.VITE_MICROCMS_DOMAIN,
  apiKey: import.meta.env.VITE_MICROCMS_APIKEY,
});

//型定義
export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};
export type NewsResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: News[];
};

//APIの呼び出し
export const getNews = async (queries?: MicroCMSQueries) => {
  return await client.get<NewsResponse>({ endpoint: "news", queries });
};
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
};
