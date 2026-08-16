import type { Product } from "../../../product";

export const isuzuDMax_2007Plus_35 = {
  id: "isuzu-d-max-2007-plus-35",
  slug: "isuzu-d-max-2007-plus-35",

  shortName: {
    en: "D-Max",
    is: "D-Max",
  },
  
  name: {
    en: "Isuzu D-Max 2007+ 35\"",
    is: "Isuzu D-Max 2007+ 35\"",
  },

  modelId: "d-max",
  makerId: "isuzu",

  years: {
    yearFrom: 2007,
  },

  tireSize: {
    minInches: 35,
    maxInches: 35,
  },

  rimWidth: {
    minInches: 10,
    maxInches: 10,
  },

  images: [{src: 'Isuzu Dmax ’02 – ’11. 33″ – 35″ a.jpg'}, {src: 'Isuzu Dmax ’02 – ’11. 33″ – 35″ b.jpg'}, {src: 'Isuzu Dmax ’02 – ’11. 33″ – 35″ c.jpg'}],

  tags: [],
} satisfies Product;
