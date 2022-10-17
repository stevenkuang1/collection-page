import { CollectionDetail, CollectionItem } from "./types";
import { SLUG, PAGE_SIZE, ZEROS, ITEMS_API, SLUG_API } from "./constants";
import axios from "axios";
import { QueryParameters } from "./types";

export async function getCollectionSlug(): Promise<CollectionDetail> {
  const response = await axios.get(`${SLUG_API}${SLUG}`, {
    timeout: 20000,
  });
  return response.data;
}

export async function getCollectionItems({
  page,
  sortBy,
  query,
  attr,
}: QueryParameters): Promise<CollectionItem[]> {
  const response = await axios.get(`${ITEMS_API}`, {
    params: {
      pageSize: PAGE_SIZE,
      pageNum: page,
      collectionSlug: SLUG,
      orderBy: sortBy,
      query: query,
      attributeFilters: JSON.stringify(attr),
    },
    timeout: 20000,
  });
  return response.data;
}

export const format = (value: number) => {
  return Math.round(value / ZEROS).toLocaleString();
};
