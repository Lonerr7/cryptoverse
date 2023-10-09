import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  FetchNewsThunk,
  NewsItem,
  NewsSliceState,
} from '../../types/reduxTypes/newsSliceTypes';
import { newsApi } from '../../api/newsApi';

export const fetchCryptoNews = createAsyncThunk(
  'news/fetchCryptoNews',
  async ({ newsCategory, count }: FetchNewsThunk, { rejectWithValue }) => {
    try {
      const response = await newsApi.getCryptoNews(newsCategory, count);

      return response.data.value
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: NewsSliceState = {
  news: [],
  isFetching: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCryptoNews.pending.type]: (state) => {
      state.isFetching = true;
    },
    [fetchCryptoNews.fulfilled.type]: (
      state,
      action: PayloadAction<NewsItem[]>
    ) => {
      state.isFetching = false;
      state.news = action.payload;
    },
  },
});

export default newsSlice.reducer;
