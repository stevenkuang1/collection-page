export interface SocialLinkInterface {
  name: string;
  link: string;
}

export interface SortInterface {
  name: string;
  value: string;
}

export interface QueryParameters {
  page: number;
  sortBy: string;
  query: string;
  attr: {
    traitType: string;
    values: string[];
  }[];
}

export interface GridProps {
  attributes?: {
    traitType: string;
    values: {
      value: string;
      count: number;
    }[];
  }[];
}

export interface FilterProps {
  show: boolean;
  updateAttr: (value: { traitType: string; values: string[] }) => void;
  attributes?: AttributeType[];
}

export interface ErrorProps {
  error: boolean;
  content: string;
}

export interface BannerProps {
  error: boolean;
  collection?: CollectionDetail;
  isLoadingCollection: boolean;
}

export interface CardsProps {
  item: CollectionItem;
}

export interface SearchBarProps {
  updateQuery: (newType: string) => void;
}

export interface AttributeFilterProps {
  updateAttr: (value: { traitType: string; values: string[] }) => void;
  attribute?: AttributeType;
}

export interface CollectionDetail {
  id: string;
  address: string;
  name: string;
  slugName: string;
  symbol: string;
  type: string;
  createdAt: number;
  numOwners: number;
  numItems: number;
  numAsks: number;
  numSales: number;
  volume: string;
  volumeTotal: number;
  floor: number;
  verified: string;
  discordUrl: string;
  twitterUrl: string;
  websiteUrl: string;
  bannerUrl: string;
  pfpUrl: string;
  description: string;
  attributes?: {
    traitType: string;
    values: {
      value: string;
      count: number;
    }[];
  }[];
}

export interface CollectionItem {
  id: string[];
  collectionSymbol: string;
  tokenId: string;
  collection: string;
  metadata?: {
    attributes: {
      traitType: string;
      value: string;
    }[];
    image: string;
    name: string;
  };
  bestBid?: {
    price: string;
    startTime: string;
    endTime: string;
  };
  currentAsk?: {
    price: string;
    startTime: string;
    endTime: string;
  };
  lastSalePrice: string;
  owner?: {
    id: string;
    ownerId: string;
  };
}

export interface AttributeType {
  traitType: string;
  values: {
    value: string;
    count: number;
  }[];
}

export interface SearchAttributes {
  traitType: string;
  values: string[];
}
