import type { Product } from "../../../product";

export const jeepWranglerJl_2019Plus_40 = {
  id: "jeep-wrangler-jl-2019-plus-40",
  slug: "jeep-wrangler-jl-2019-plus-40",

  shortName: {
    en: "Wrangler JL",
    is: "Wrangler JL",
  },

  name: {
    en: "Jeep Wrangler JL 2019+ 40\"",
    is: "Jeep Wrangler JL 2019+ 40\"",
  },

  modelId: "wrangler-jl",
  makerId: "jeep",

  years: {
    yearFrom: 2019,
  },

  tireSize: {
    minInches: 40,
    maxInches: 40,
  },

  rimWidth: {
    textEn: '+9 cm',
    textIs: '+9 cm'
  },

  images: [{src: 'Wranger 40 2 b.jpeg'}, {src: 'Wranger 40 2 c.jpeg'}, {src: 'Wranger 40 2.jpg'}, {src: 'Wrangler 40 a.jpg'}],

  tags: [],
} satisfies Product;
