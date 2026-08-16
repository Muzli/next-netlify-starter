import type { Product } from "../../../product";

export const fordF350_2017Plus_40 = {
  id: "ford-f350-2017-plus-40",
  slug: "ford-f350-2017-plus-40",

  shortName: {
    en: "F350",
    is: "F350",
  },

  name: {
    en: "Ford F350 2017+ 40\"",
    is: "Ford F350 2017+ 40\"",
  },

  modelId: "f350",
  makerId: "ford",

  years: {
    yearFrom: 2017,
  },

  tireSize: {
    minInches: 40,
    maxInches: 40,
  },

  images: [{ src:'Ford F350 ’17 – ’present. 37″ – 40″ b.jpg' }, { src:'Ford F350 ’17 – ’present. 37″ – 40″ c.jpg' }, { src:'Ford F350 ’17 – ’present. 37″ – 40″.jpg' }],

  tags: [],
} satisfies Product;
