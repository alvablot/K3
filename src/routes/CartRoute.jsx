import Products from "../components/Products";
import Cart from "../components/Cart";
import Links from "../components/Links";
import CartDetails from "../components/CartDetails";
export default function CartRoute(props) {
  const {
    productArray,
    addToCart,
    showProducts,
    productDetail,

    summonPrice,
    totalAmountOfProducts,
  } = props;
  return (
    <div>
      <header className="App-header">
        <Links />
      </header>
      <main style={{ padding: "1rem 0" }}>
        <h3>Varukorg</h3>
        <div className="products">
          <CartDetails
            value=""
            productArray={productArray}
            addToCart={addToCart}
            summonPrice={summonPrice}
            totalAmountOfProducts={totalAmountOfProducts}
          />
        </div>
      </main>
    </div>
  );
}
