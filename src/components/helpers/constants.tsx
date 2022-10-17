import { SocialLinkInterface, SortInterface } from "./types";

export const SLUG: string = "wolfi-land";
export const PAGE_SIZE: number = 20;
export const ZEROS: number = 10 ** 18;
export const SLUG_API: string = "/v2/collections/slug/";
export const ITEMS_API: string = "/v2/items";
export const SIGN_IN: string = "https://joepegs.com/sign-in";
export const COLLECTION_URL: string = "https://joepegs.com/collections";
export const ABOUT_US_URL: string = "https://joepegs.com/about-us";
export const SUPPORT_URL: string = "https://joepegs.com/support";
export const PRIVACY: string = "https://joepegs.com/privacy";
export const TOS: string = "https://joepegs.com/tos";
export const ITEM_URL: string = "https://joepegs.com/item/";

export const SORT_OPTIONS: SortInterface[] = [
  {
    name: "Ascending Price",
    value: "price_asc",
  },
  {
    name: "Descending Price",
    value: "price_desc",
  },
  {
    name: "Recent Activity",
    value: "recent_activity",
  },
  {
    name: "Recent Sale",
    value: "recent_sale",
  },
  {
    name: "Recent Listing",
    value: "recent_listing",
  },
  {
    name: "Ascending Rarity",
    value: "rarity_asc",
  },
  {
    name: "Descending Rarity",
    value: "rarity_desc",
  },
];

export const SOCIAL_LINKS: SocialLinkInterface[] = [
  {
    name: "Twitter",
    link: "https://twitter.com/joepegsnft",
  },
  {
    name: "Discord",
    link: "https://discord.gg/traderjoe",
  },
  {
    name: "Reddit",
    link: "https://reddit.com/",
  },
];
