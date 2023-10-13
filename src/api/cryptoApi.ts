import axios from 'axios';
import { FetchCoinHistoryParams } from '../types/reduxTypes/coinsSliceTypes';

const axiosInstance = axios.create({
  baseURL: 'https://coinranking1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'd3d54c40b9mshf5b8d9ec6302b81p17e567jsne03d208db1a5',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  },
});

export const cryptoApi = {
  fetchCryptos: async (limit = 50) =>
    await axiosInstance.get(`/coins?limit=${limit}`),
  getCoinDetails: async (coinId: string) =>
    await axiosInstance.get(`/coin/${coinId}`),
  getCoinHistory: async ({ coinId, timePeriod }: FetchCoinHistoryParams) =>
    await axiosInstance.get(`/coin/${coinId}/history?timePeriod=${timePeriod}`),
};
