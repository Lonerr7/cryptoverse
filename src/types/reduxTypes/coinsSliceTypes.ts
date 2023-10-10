export interface CoinsState {
  stats: Stats | null;
  coins: Coin[] | null;
  currentCoinDetails: CoinDetails | null;
  isFetching: boolean;
  isCoinDetailsFetching: boolean;
  coinsSearchText: string;
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

export interface CoinDetails {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: CoinDetailsLink[];
  supply: {
    confirmed: boolean;
    supplyAt: number;
    max: string;
    total: string;
    circulating: string;
  };
  numberOfMarkets: number;
  numberOfExchanges: number;
  '24hVolume': string;
  marketCap: string;
  fullyDilutedMarketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: 1;
  sparkline: string[];
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
  coinrankingUrl: string;
  tier: 1;
  lowVolume: false;
  listedAt: number;
  hasContent: true;
  notices: null | CoinDetailsNotice[];
  tags: string[];
}

interface CoinDetailsLink {
  name: string;
  type: string;
  url: string;
}

interface CoinDetailsNotice {
  type: string;
  value: string;
}
