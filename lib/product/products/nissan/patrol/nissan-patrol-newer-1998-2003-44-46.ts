import type { Product } from "../../../product";

export const nissanPatrolNewer_19982003_4446 = {
  id: "nissan-patrol-newer-1998-2003-44-46",
  slug: "nissan-patrol-newer-1998-2003-44-46",

  shortName: {
    en: "Patrol",
    is: "Patrol",
  },

  name: {
    en: "Nissan Patrol 1998-2003 44\"-46\"",
    is: "Nissan Patrol1998-2003 44\"-46\"",
  },

  modelId: "patrol",
  makerId: "nissan",

  years: {
    yearFrom: 1998,
    yearTo: 2003,
  },

  tireSize: {
    minInches: 44,
    maxInches: 46,
  },

  images: [{src: 'Patrol 3.jpeg'}, {src: 'Patrol 1.jpeg'}],

  tags: [],
} satisfies Product;
