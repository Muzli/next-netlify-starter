import { chevroletProducts } from "./chevrolet";
import { dodgeProducts } from "./dodge";
import { fordProducts } from "./ford";
import { grenadierProducts } from "./grenadier";
import { isuzuProducts } from "./isuzu";
import { ivecoProducts } from "./iveco";
import { jeepProducts } from "./jeep";
import { mercedesBenzProducts } from "./mercedes-benz";
import { mitsubishiProducts } from "./mitsubishi";
import { mussoProducts } from "./musso";
import { nissanProducts } from "./nissan";
import { scautProducts } from "./scaut";
import { suzukiProducts } from "./suzuki";
import { toyotaProducts } from "./toyota";
import { volkswagenProducts } from "./volkswagen";

import type { Product } from "../product";

export const products = [
  ...chevroletProducts,
  ...dodgeProducts,
  ...fordProducts,
  ...grenadierProducts,
  ...isuzuProducts,
  ...ivecoProducts,
  ...jeepProducts,
  ...mercedesBenzProducts,
  ...mitsubishiProducts,
  ...mussoProducts,
  ...nissanProducts,
  ...scautProducts,
  ...suzukiProducts,
  ...toyotaProducts,
  ...volkswagenProducts,
] satisfies Product[];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
