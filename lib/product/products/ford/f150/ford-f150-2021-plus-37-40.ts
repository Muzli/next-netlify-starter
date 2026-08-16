import type { Product } from "../../../product";

export const fordF150_2021Plus_3740 = {
  id: "ford-f150-2021-plus-37-40",
  slug: "ford-f150-2021-plus-37-40",

  shortName: {
    en: "F150",
    is: "F150",
  },

  name: {
    en: "Ford F150 2021+ 37\"-40\"",
    is: "Ford F150 2021+ 37\"-40\"",
  },

  modelId: "f150",
  makerId: "ford",

  years: {
    yearFrom: 2021,
  },

  tireSize: {
    minInches: 37,
    maxInches: 40,
  },

  images: [{src: 'Ford Lightning 37 b.jpeg'}, {src: 'Ford Lightning 37 c.jpeg'}],

  tags: [],
} satisfies Product;
