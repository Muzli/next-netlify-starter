import Link from "next/link";
import { getShortName, getRimWidth, formatYears, formatTireSize } from "./product";

export default function ProductRows({ products, language }) {
  return (
    <>
      {products.map((product) => {
        const firstImage = product.images?.[0];

        const imagePath = "product_photos/" +
          product.makerId +
          "/" +
          product.modelId;

        return (
        <tr key={product.id} className="align-middle">
          <td className="p-1 p-md-3">
              {firstImage && (
                <Link href={`/product_page?product=${product.slug}`}>
                  <img
                    src={`${imagePath}/${firstImage.src}`}
                    alt=""
                    className="product-thumbnail"
                  />
                </Link>
              )}
          </td>
          <td className="p-1 p-md-3">
            {product.images?.length > 0 ? (
              <Link href={`/product_page?product=${product.slug}`}>
                {getShortName(product, language)}
              </Link>
            ) : (
              getShortName(product, language)
            )}
          </td>

          <td className="p-1 p-md-3">
            {formatYears(product.years)}
          </td>

          <td className="p-1 p-md-3">
            {formatTireSize(product.tireSize)}
          </td>

          <td className="p-1 p-md-3">
            {getRimWidth(product, language)}
          </td>

          <td className="p-1 p-md-3">
            - kr.
          </td>
        </tr>
      )})}
    </>
  );
}