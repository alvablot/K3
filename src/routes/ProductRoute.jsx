import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
export default function ProductRoute(props) {
  const {
    productArray,
    addToCart,
    showProducts,
    productDetail,

    summonPrice,
    totalAmountOfProducts,
  } = props;
  let params = useParams();

  return (
    <ProductDetails
      id={params.id}
      productArray={productArray}
      addToCart={addToCart}
      showProducts={showProducts}
      productDetail={productDetail}
      value=""
      summonPrice={summonPrice}
      totalAmountOfProducts={totalAmountOfProducts}
    />
  );
}
