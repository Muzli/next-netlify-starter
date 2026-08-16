import { ivecoPickupProducts } from "./pickup";
import { ivecoVanProducts } from "./van";
import { ivecoOtherProducts } from "./other";

export const ivecoProducts = [
  ...ivecoPickupProducts,
  ...ivecoVanProducts,
  ...ivecoOtherProducts,
];