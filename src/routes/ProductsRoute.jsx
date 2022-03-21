import Products from "../components/Products";
import Cart from "../components/Cart";
import Links from "../components/Links";
export default function ProductsRoute(props) {
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
        <Cart
          value=""
          productArray={productArray}
          addToCart={addToCart}
          summonPrice={summonPrice}
          totalAmountOfProducts={totalAmountOfProducts}
        />
      </header>
      <main style={{ padding: "1rem 0" }}>
      <h3>Produktlista</h3>

      <Products
        productArray={productArray}
        addToCart={addToCart}
        showProducts={showProducts}
        productDetail={productDetail}
      />
      </main>
    </div>
  );
}
