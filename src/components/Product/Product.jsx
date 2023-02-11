import { useState } from 'react';
import './Product.css';

const Product = ({
  name,
  desc,
  infotext,
  image,
  price,
  oldprice,
  addToList,
}) => {
  const [showText, setShowText] = useState(false);

  const showTextLine = showText ? 'Hide information' : 'See information';

  return (
    <div className="productContainer">
      <div className="product-image">
        <img
          className="productImage"
          src={`/images/${image}.jpg`}
          alt="product"
        />
      </div>
      <div className="product-body">
        <h2 className="product-body-header">{name}</h2>
        <p className="product-body">{desc}</p>
        <div className="product-infotext">
          <button
            className="infoTextToggler"
            onClick={() => setShowText(!showText)}
          >
            {showTextLine}
          </button>
          <p>{showText && infotext}</p>
        </div>
        <div className="product-pricearea">
          <div className="priceNow">
            <h2>{price} :-</h2>
          </div>
          <div className="priceOld">
            <h2>{oldprice !== 0 && oldprice}</h2>
          </div>
        </div>
        <button
          onClick={() => {
            addToList(name, price);
          }}
        >
          Add to list
        </button>
      </div>
    </div>
  );
};

export default Product;
