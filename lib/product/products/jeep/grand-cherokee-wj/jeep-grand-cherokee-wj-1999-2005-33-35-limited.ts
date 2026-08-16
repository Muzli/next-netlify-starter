import type { Product } from "../../../product";

export const jeepGrandCherokeeWj_19992005_3335_limited = {
  id: "jeep-grand-cherokee-wj-1999-2005-33-35-limited",
  slug: "jeep-grand-cherokee-wj-1999-2005-33-35-limited",

  shortName: {
    en: "Grand Cherokee WJ (Limited fender flares)",
    is: "Grand Cherokee WJ (Limited kantar)",
  },

  name: {
    en: "Jeep Grand Cherokee WJ 1999-2005 33\"-35\" (Limited fender flares)",
    is: "Jeep Grand Cherokee WJ 1999-2005 33\"-35\" (Limited kantar)",
  },
  
  modelId: "grand-cherokee-wj",
  makerId: "jeep",

  years: {
    yearFrom: 1999,
    yearTo: 2005,
  },

  tireSize: {
    minInches: 33,
    maxInches: 35,
  },

  rimWidth: {
    minInches: 10,
    maxInches: 10,
  },

  images: [{src: 'Grand Cherokee WJ ’99 – ’04. 33″ – 35” a.jpg'}, {src: 'Grand Cherokee WJ ’99 – ’04. 33″ – 35” b.jpg'}, {src: 'Grand Cherokee WJ ’99 – ’04. 33″ – 35” c.jpg'}],

  tags: [],
} satisfies Product;
