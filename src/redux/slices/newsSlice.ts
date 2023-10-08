import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  FetchNewsThunk,
  NewsSliceState,
} from '../../types/reduxTypes/newsSliceTypes';
import { newsApi } from '../../api/newsApi';

export const fetchCryptoNews = createAsyncThunk(
  'news/fetchCryptoNews',
  async ({ newsCategory, count }: FetchNewsThunk, { rejectWithValue }) => {
    try {
      const response = await newsApi.getCryptoNews(newsCategory, count);

      console.log(response);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: NewsSliceState = {
  news: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default newsSlice.reducer;
export const {} = newsSlice.actions;
