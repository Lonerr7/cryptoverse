import { configureStore, combineReducers } from '@reduxjs/toolkit';
import coinsSlice from './slices/coinsSlice';

const rootReducer = combineReducers({
  coins: coinsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

declare global {
  interface Window {
    store: any;
  }
}
window.store = store;
