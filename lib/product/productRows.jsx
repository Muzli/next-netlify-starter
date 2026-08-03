import { getShortName, getName, getRimWidth, formatYears, formatTireSize } from "./product";

export default function ProductRows({ products, language }) {
  return (
    <>
      {products.map((product) => (
        <tr key={product.id}>
          <td className="p-1 p-md-3">
            {getShortName(product, language)}
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
      ))}
    </>
  );
}