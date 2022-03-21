import Cart from "../components/Cart";
import Links from "../components/Links";

export default function HomeRoute(props) {
  const { productArray, addToCart, summonPrice, totalAmountOfProducts } = props;
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
        <h3>Hem</h3>
        <div className="products">
          <p>Välkommen till min fina internetaffär</p>
          <p>
            Här kan du köpa både begagnat grus och diverse användbara saker, som
            använda plastomslag mm från Clas Ohlson.
          </p>
        </div>
      </main>
    </div>
  );
}
