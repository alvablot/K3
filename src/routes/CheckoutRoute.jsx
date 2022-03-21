import CartDetails from "../components/CartDetails";
import Links from "../components/Links";

export default function CheckoutRoute(props) {
  let { productArray, addToCart, summonPrice, totalAmountOfProducts } = props;
  let shipment = 159;
  let med = "Tack för att du spenderar alla dina pengar på mig!";
  if (totalAmountOfProducts < 1) {
    shipment = 0;
    totalAmountOfProducts = "Varukorgen är tom";
    med = "Du kan inte betala 0 kronor, pucko!";
  }

  function tack() {
    return alert(med);
  }
  return (
    <div>
      <header className="App-header">
        <Links />
      </header>
      <main style={{ padding: "1rem 0" }}>
        <h3>Kassa</h3>
        <div className="products">
          <div className="cart">
            Fraktkostnad: {shipment}kr
            <br />
            <b>Att betala: {summonPrice + shipment}kr</b>
            <br />
            <button onClick={tack}>Betala</button>
            <br />
            <input type="radio" name="betalning" checked />
            Klarna
            <br />
            <input type="radio" name="betalning" />
            Kort
            <br />
            <input type="radio" name="betalning" />
            Paypal
          </div>
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
