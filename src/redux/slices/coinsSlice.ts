import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  CoinDetails,
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

export const fetchCoinDetails = createAsyncThunk(
  'coins/fetchCoinDetails',
  async ({ coinId }: { coinId: string }, { rejectWithValue }) => {
    try {
      const response = await cryptoApi.getCoinDetails(coinId);

      return response.data.data.coin;
    } catch (error: any) {
      return rejectWithValue(error?.message); //!
    }
  }
);

const initialState: CoinsState = {
  stats: null,
  coins: null,
  currentCoinDetails: null,
  isFetching: false,
  isCoinDetailsFetching: false,
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
      state.isFetching = false; //!
    },
    [fetchCoinDetails.pending.type]: (state) => {
      state.isCoinDetailsFetching = true;
    },
    [fetchCoinDetails.fulfilled.type]: (
      state,
      action: PayloadAction<CoinDetails>
    ) => {
      state.isCoinDetailsFetching = false;
      state.currentCoinDetails = action.payload;
    },
    [fetchCoinDetails.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isCoinDetailsFetching = false; //!
    },
  },
});

export default coinsSlice.reducer;
export const { changeSearchText } = coinsSlice.actions;
