import type { Product } from "../../../product";

export const toyotaLc250_2025Plus_42 = {
  id: "toyota-lc-250-2025-plus-42",
  slug: "toyota-lc-250-2025-plus-42",

  shortName: {
    en: "LC 250",
    is: "LC 250",
  },

  name: {
    en: "Toyota LC 250 2025+ 42\"",
    is: "Toyota LC 250 2025+ 42\"",
  },

  modelId: "lc-250",
  makerId: "toyota",

  years: {
    yearFrom: 2025,
  },

  tireSize: {
    minInches: 42,
    maxInches: 42,
  },

  images: [{src: 'LC250 42 b.jpg'}, {src: 'LC250 42.jpg'}, {src: 'LC250 40-42 b.jpg'}, {src: 'LC250 40-42.jpg'}],

  tags: [],
} satisfies Product;
