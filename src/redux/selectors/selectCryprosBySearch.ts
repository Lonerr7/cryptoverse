import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectAllCryptos = (state: RootState) => state.coins.coins;
export const selectCryptoSearchText = (state: RootState) =>
  state.coins.coinsSearchText;

export const selectCryptosBySearch = createSelector(
  [selectAllCryptos, selectCryptoSearchText],
  (allCoins, coinsSearchText) => {
    if (!allCoins) {
      return [];
    }

    if (!coinsSearchText) {
      return allCoins;
    }

    return allCoins?.filter((coin) =>
      coin.name.toLowerCase().includes(coinsSearchText.toLowerCase())
    );
  }
);
