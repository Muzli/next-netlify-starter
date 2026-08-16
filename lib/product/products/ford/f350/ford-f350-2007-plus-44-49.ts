import type { Product } from "../../../product";

export const fordF350_2007Plus_4449 = {
  id: "ford-f350-2007-plus-44-49",
  slug: "ford-f350-2007-plus-44-49",

  shortName: {
    en: "F350",
    is: "F350",
  },

  name: {
    en: "Ford F350 2007+ 44\"-49\"",
    is: "Ford F350 2007+ 44\"-49\"",
  },

  modelId: "f350",
  makerId: "ford",

  years: {
    yearFrom: 2007,
  },

  tireSize: {
    minInches: 44,
    maxInches: 49,
  },

  images: [{src: 'F350 49.jpg'}, {src: 'F350 49 (2).jpg'}, {src: '44-49 tommur F350 b.jpeg'}, {src: '44-49 tommur F350.jpeg'}, {src: '44-49 tommur F350 c.jpeg'} ],

  tags: [],
} satisfies Product;
