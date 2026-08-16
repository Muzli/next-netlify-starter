import type { Product } from "../../../product";

export const jeepGrandCherokeeWj_19992005_3335_laredo = {
  id: "jeep-grand-cherokee-wj-1999-2005-33-35-laredo",
  slug: "jeep-grand-cherokee-wj-1999-2005-33-35-laredo",

  shortName: {
    en: "Grand Cherokee WJ (Laredo fender flares)",
    is: "Grand Cherokee WJ (Laredo kantar)",
  },

  name: {
    en: "Jeep Grand Cherokee WJ 1999-2005 33\"-35\" (Laredo fender flares)",
    is: "Jeep Grand Cherokee WJ 1999-2005 33\"-35\" (Laredo kantar)",
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

  images: [{src: 'Grand Cherokee WJ ’99 – ’04. 33″ – 35” a.jpg'}, {src: 'Grand Cherokee WJ ’99 – ’04. 33″ – 35” b.jpg'}, {src: 'Grand Cherokee WJ ’99 – ’04. 33″ – 35” c.jpg'}],

  tags: [],
} satisfies Product;
