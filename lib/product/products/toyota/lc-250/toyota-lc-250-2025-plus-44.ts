import type { Product } from "../../../product";

export const toyotaLc250_2025Plus_44 = {
  id: "toyota-lc-250-2025-plus-44",
  slug: "toyota-lc-250-2025-plus-44",

  shortName: {
    en: "LC 250",
    is: "LC 250",
  },

  name: {
    en: "Toyota LC 250 2025+ 44\"",
    is: "Toyota LC 250 2025+ 44\"",
  },

  modelId: "lc-250",
  makerId: "toyota",

  years: {
    yearFrom: 2025,
  },

  tireSize: {
    minInches: 44,
    maxInches: 44,
  },

  images: [{src: 'LC250 44 6.jpg'}, {src: 'LC250 44 4.jpg'}, {src: 'LC250 44 5.jpg'}, {src: 'LC250 44.jpg'}],

  tags: [],
} satisfies Product;
