import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  CoinsResponse,
  CoinsState,
} from '../../types/reduxTypes/coinsSliceTypes';
import { cryptoApi } from '../../api/cryptoApi';

export const getCryptos = createAsyncThunk(
  'coins/getCryptos',
  async (limit: number, { rejectWithValue }) => {
    try {
      const response = await cryptoApi.fetchCryptos(limit);

      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.message); //!
    }
  }
);

const initialState: CoinsState = {
  stats: null,
  coins: null,
  isFetching: false,
  coinsSearchText: '',
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    changeSearchText: (state, action: PayloadAction<string>) => {
      state.coinsSearchText = action.payload;
    },
  },
  extraReducers: {
    [getCryptos.pending.type]: (state) => {
      state.isFetching = true;
    },
    [getCryptos.fulfilled.type]: (
      state,
      action: PayloadAction<CoinsResponse>
    ) => {
      state.isFetching = false;
      state.coins = action.payload.coins;
      state.stats = action.payload.stats;
    },
    [getCryptos.rejected.type]: (state) => {
      state.isFetching = false;
    },
  },
});

export default coinsSlice.reducer;
export const { changeSearchText } = coinsSlice.actions;
