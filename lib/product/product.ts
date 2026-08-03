export type DictionaryKey = string;

export type ProductImage = {
  src: string;
  altKey: DictionaryKey;
  captionKey?: DictionaryKey;
};

export type ProductShortName = {
  is: string;
  en: string;
};

export type ProductName = {
  is: string;
  en: string;
};

export type ProductComment = {
  commentIs: string;
  commentEn: string;
};

export type VehicleModelId = string;
export type VehicleMakerId = string;

export type YearFitment = {
  yearFrom: number;
  yearTo?: number;
};

export type TireFitment = {
  minInches: number;
  maxInches: number;
};

export type RimWidthFitment = {
  minInches?: number;
  maxInches?: number;
  textIs?: string;
  textEn?: string;
};

export type Product = {
  id: string;
  slug: string;

  shortName: ProductShortName;
  name: ProductName;
  comment?: ProductComment;

  modelId: VehicleModelId;
  makerId: VehicleMakerId;
  years?: YearFitment;
  tireSize?: TireFitment;
  rimWidth?: RimWidthFitment;

  images?: ProductImage[];
  tags?: string[];
};

export function getShortName(
  product: Product,
  language: string,
): string {
  return language === "is"
    ? product.shortName.is
    : product.shortName.en;
}

export function getName(
  product: Product,
  language: string,
): string {
  return language === "is"
    ? product.name.is
    : product.name.en;
}

export function getRimWidth(
  product: Product,
  language: string,
): string {
  if (!product.rimWidth) {
    return "";
  }

  if(product.rimWidth.minInches) {
    if(product.rimWidth.maxInches && product.rimWidth.minInches !== product.rimWidth.maxInches) {
      return `${product.rimWidth.minInches}" - ${product.rimWidth.maxInches}"`;
    }

    return `${product.rimWidth.minInches}"`;
  }

  if(product.rimWidth.textIs && product.rimWidth.textEn) {
    return language === "is"
      ? product.rimWidth.textIs
      : product.rimWidth.textEn;
  }

  return "";
}

export function formatYears(years: YearFitment): string {
  if(!years) {
    return "";
  }

  if (years.yearTo) {
    return `${years.yearFrom} - ${years.yearTo}`;
  }
  return `${years.yearFrom}-`;
}

export function formatTireSize(tireSize: TireFitment): string {
  if(!tireSize) {
    return "";
  }

  if (tireSize.minInches === tireSize.maxInches) {
    return `${tireSize.minInches}"`;
  }
  return `${tireSize.minInches}" - ${tireSize.maxInches}"`;
}