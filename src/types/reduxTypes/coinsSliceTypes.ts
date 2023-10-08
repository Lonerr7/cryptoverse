export interface CoinsState {
  stats: Stats | null;
  coins: Coin[] | null;
  isFetching: boolean;
}

export interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  lowVolume: false;
  coinrankingUrl: string;
  '24hVolume': string;
  btcPrice: string;
  sparkline: string[];
}

export interface CoinsResponse {
  stats: Stats;
  coins: Coin[];
}
