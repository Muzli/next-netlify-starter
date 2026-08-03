import { fordEconolineProducts } from "./econoline";
import { fordExcursionProducts } from "./excursion";
import { fordF150Products } from "./f150";
import { fordF350Products } from "./f350";
import { fordRangerProducts } from "./ranger";

export const fordProducts = [
  ...fordEconolineProducts,
  ...fordExcursionProducts,
  ...fordF150Products,
  ...fordF350Products,
  ...fordRangerProducts,
];