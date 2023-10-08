import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://bing-news-search1.p.rapidapi.com',
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'd3d54c40b9mshf5b8d9ec6302b81p17e567jsne03d208db1a5',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
  },
});

export const newsApi = {
  getCryptoNews: async (newsCategory: string, count: number) =>
    await axiosInstance.get(
      `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
    ),
};
