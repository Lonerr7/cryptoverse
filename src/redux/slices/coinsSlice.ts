import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  CoinDetails,
  CoinHistoryData,
  CoinsResponse,
  CoinsState,
  FetchCoinHistoryParams,
} from '../../types/reduxTypes/coinsSliceTypes';
import { cryptoApi } from '../../api/cryptoApi';

export const getCryptos = createAsyncThunk(
  'coins/getCryptos',
  async (limit: number, { rejectWithValue }) => {
    try {
      const response = await cryptoApi.fetchCryptos(limit);

      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
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
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCoinHistory = createAsyncThunk(
  'coins/fetchCoinHistory',
  async (
    { coinId, timePeriod = '24h' }: FetchCoinHistoryParams,
    { rejectWithValue }
  ) => {
    try {
      const response = await cryptoApi.getCoinHistory({ coinId, timePeriod });

      return response.data.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: CoinsState = {
  stats: null,
  coins: [],
  currentCoinDetails: null,
  currentCoinHistory: {
    change: '',
    history: [],
  },
  isFetching: false,
  isCoinDetailsFetching: false,
  coinsSearchText: '',
  getCryptosErrMsg: '',
  fetchCoinDetailsErrMsg: '',
  fetchCoinHistoryErrMsg: '',
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
      state.getCryptosErrMsg = '';
      state.coins = action.payload.coins;
      state.stats = action.payload.stats;
    },
    [getCryptos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.getCryptosErrMsg = action.payload;
    },
    [fetchCoinDetails.pending.type]: (state) => {
      state.isCoinDetailsFetching = true;
    },
    [fetchCoinDetails.fulfilled.type]: (
      state,
      action: PayloadAction<CoinDetails>
    ) => {
      state.isCoinDetailsFetching = false;
      state.fetchCoinDetailsErrMsg = '';
      state.currentCoinDetails = action.payload;
    },
    [fetchCoinDetails.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isCoinDetailsFetching = false;
      state.fetchCoinDetailsErrMsg = action.payload;
    },
    [fetchCoinHistory.fulfilled.type]: (
      state,
      action: PayloadAction<CoinHistoryData>
    ) => {
      state.fetchCoinHistoryErrMsg = '';
      state.currentCoinHistory = action.payload;
    },
    [fetchCoinHistory.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.fetchCoinHistoryErrMsg = action.payload;
    },
  },
});

export default coinsSlice.reducer;
export const { changeSearchText } = coinsSlice.actions;
