import { useState } from 'react';
import './App.css';
import Product from './components/Product/Product';
import data from './data/products.json';

function App() {
  const [favProducts, setFavProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const productsdata = data.map((data) => {
    return (
      <Product
        key={data.id}
        name={data.name}
        desc={data.desc}
        infotext={data.infotext}
        image={data.image}
        price={data.price}
        oldprice={data.oldprice}
        addToList={addToList}
      />
    );
  });

  function addToList(newProd, price) {
    setFavProducts((oldArray) => [...oldArray, newProd]);
    setTotalPrice(totalPrice + price);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Super product list</h1>
        <div className="productsContainer">{productsdata}</div>
        <div className="wishlist-area">
          <h2>Wishlist</h2>
          <div className="wishlist-area-list">
            {favProducts.map((product, index) => {
              return <p key={index}>{product}</p>;
            })}
          </div>
        </div>
        <div className="totalPrice-area">
          <h2>Total Price: {totalPrice}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
