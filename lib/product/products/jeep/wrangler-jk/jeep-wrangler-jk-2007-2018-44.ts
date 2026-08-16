import type { Product } from "../../../product";

export const jeepWranglerJk_20072018_44 = {
  id: "jeep-wrangler-jk-2007-2018-44",
  slug: "jeep-wrangler-jk-2007-2018-44",

  shortName: {
    en: "Wrangler JK",
    is: "Wrangler JK",
  },

  name: {
    en: "Jeep Wrangler JK 2007-2018 44\"",
    is: "Jeep Wrangler JK 2007-2018 44\"",
  },

  modelId: "wrangler-jk",
  makerId: "jeep",

  years: {
    yearFrom: 2007,
    yearTo: 2018,
  },

  tireSize: {
    minInches: 44,
    maxInches: 44,
  },

  rimWidth: {
    textEn: '+21 cm E28',
    textIs: '+21 cm E28',
  },

  images: [{src: 'Wranger 44.jpg'}, {src: 'Wrangler 44 3.jpg'}, {src: 'Wrangler 44 3 b.jpeg'}],

  tags: [],
} satisfies Product;
