import type { Product } from "../../../product";

export const mussoRexton_2018Plus_3537 = {
  id: "musso-rexton-2018-plus-35-37",
  slug: "musso-rexton-2018-plus-35-37",

  shortName: {
    en: "Rexton",
    is: "Rexton",
  },

  name: {
    en: "Musso Rexton 2018+ 35-37\"",
    is: "Musso Rexton 2018+ 35-37\"",
  },

  modelId: "rexton",
  makerId: "musso",

  years: {
    yearFrom: 2018,
  },

  tireSize: {
    minInches: 35,
    maxInches: 37,
  },

  images: [{src: 'Rexton.jpg'}, {src: 'carousel_2.jpg'}, {src: 'Rexton 35.jpg'}],

  tags: [],
} satisfies Product;
