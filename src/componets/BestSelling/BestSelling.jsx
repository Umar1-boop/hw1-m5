import './bestselling.css';

import N1 from '../../img/N1.png'
import N2 from '../../img/N2.png'
import N3 from '../../img/N3.png'

export default function BestSelling() {
  return (
    <div>
      <div className="best-selling">
        <h1>Best selling</h1>

        <p className="subtitle">
          Get in on the trend with our curated selection of best-selling styles.
        </p>

        <div className="products">
          <div className="product">
            <div className="product-image first">
              <img src={N1} alt="Regular Fit Long Sleeve Top" />
            </div>

            <h2>Regular Fit Long Sleeve Top</h2>

            <div className="product-info">
              <span>$38.99</span>
              <span className="line"></span>
              <span>5.0 <span className="star">★</span></span>
            </div>
          </div>

          <div className="product">
            <div className="product-image second">
              <img src={N2} alt="Black Crop Tailored Jacket" />
            </div>

            <h2>Black Crop Tailored Jacket</h2>

            <div className="product-info">
              <span>$62.99</span>
              <span className="line"></span>
              <span>4.9 <span className="star">★</span></span>
            </div>
          </div>

          <div className="product">
            <div className="product-image third">
              <img src={N3} alt="Textured Sunset Shirt" />
            </div>

            <h2>Textured Sunset Shirt</h2>

            <div className="product-info">
              <span>$49.99</span>
              <span className="line"></span>
              <span>5.0 <span className="star">★</span></span>
            </div>
          </div>
        </div>

        <button className="see-all" type="button">
          See all <span>→</span>
        </button>
      </div>
    </div>
  );
}