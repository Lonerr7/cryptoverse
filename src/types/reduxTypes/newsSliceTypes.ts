export interface FetchNewsThunk {
  newsCategory: string;
  count: number;
}

export interface NewsSliceState {
  news: NewsItem[];
  isFetching: boolean;
  fetchCryptoNewsErrMsg: string;
}

export interface NewsItem {
  _type: string;
  name: string;
  url: string;
  image: {
    _type: string;
    thumbnail: {
      _type: string;
      contentUrl: string;
      width: number;
      height: number;
    };
    isLicensed: boolean;
  };
  description: string;
  provider: NewsProviderItem[];
  datePublished: string;
}

interface NewsProviderItem {
  _type: string;
  name: string;
  image: {
    _type: string;
    thumbnail: {
      _type: string;
      contentUrl: string;
    };
  };
}
