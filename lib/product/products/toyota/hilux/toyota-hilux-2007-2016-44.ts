import type { Product } from "../../../product";

export const toyotaHilux_20072016_44 = {
  id: "toyota-hilux-2007-2016-44",
  slug: "toyota-hilux-2007-2016-44",

  shortName: {
    en: "Hilux",
    is: "Hilux",
  },

  name: {
    en: "Toyota Hilux 2007-2016 44\"",
    is: "Toyota Hilux 2007-2016 44\"",
  },

  modelId: "hilux",
  makerId: "toyota",

  years: {
    yearFrom: 2007,
    yearTo: 2016,
  },

  tireSize: {
    minInches: 44,
    maxInches: 44,
  },

  rimWidth: {
    minInches: 12
  },

  images: [{src: 'Hilux 44.jpg'}, {src: 'Hilux 2.jpeg'}, {src: 'Hilux 3.jpeg'}],

  tags: [],
} satisfies Product;
