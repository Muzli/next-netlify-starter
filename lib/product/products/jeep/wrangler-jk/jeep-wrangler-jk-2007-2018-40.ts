import type { Product } from "../../../product";

export const jeepWranglerJk_20072018_40 = {
  id: "jeep-wrangler-jk-2007-2018-40",
  slug: "jeep-wrangler-jk-2007-2018-40",

  shortName: {
    en: "Wrangler JK",
    is: "Wrangler JK",
  },

  name: {
    en: "Jeep Wrangler JK 2007-2018 40\"",
    is: "Jeep Wrangler JK 2007-2018 40\"",
  },

  modelId: "wrangler-jk",
  makerId: "jeep",

  years: {
    yearFrom: 2007,
    yearTo: 2018,
  },

  tireSize: {
    minInches: 40,
    maxInches: 40,
  },

  rimWidth: {
    textEn: '+9 cm',
    textIs: '+9 cm',
  },

  images: [{src: 'Wranger 40 2 b.jpeg'}, {src: 'Wranger 40 2 c.jpeg'}, {src: 'Wranger 40 2.jpg'}, {src: 'Wrangler 40 a.jpg'}],

  tags: [],
} satisfies Product;
