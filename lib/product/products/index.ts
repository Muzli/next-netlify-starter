import { chevroletProducts } from "./chevrolet";
import { dodgeProducts } from "./dodge";
import { fordProducts } from "./ford";
import { ineosProducts } from "./ineos";
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
  ...ineosProducts,
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
