import { toyotaHiluxProducts } from "./hilux";
import { toyotaLc150Products } from "./lc-150";
import { toyotaLc200Products } from "./lc-200";
import { toyotaLc250Products } from "./lc-250";
import { toyotaLc80Products } from "./lc-80";
import { toyotaLc70Products } from "./lc-70";
import { toyotaLc90Products } from "./lc-90";
import { toyotaLc100Products } from "./lc-100";
import { toyotaTacomaProducts } from "./tacoma";

export const toyotaProducts = [
  ...toyotaHiluxProducts,
  ...toyotaLc100Products,
  ...toyotaLc150Products,
  ...toyotaLc200Products,
  ...toyotaLc250Products,
  ...toyotaLc70Products,
  ...toyotaLc80Products,
  ...toyotaLc90Products,
  ...toyotaTacomaProducts
];