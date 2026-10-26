import './bestselling.css';

import N1 from '../../img/N1.png'
import N2 from '../../img/N2.png'
import N3 from '../../img/N3.png'
import BestSellingCard from './ui/BestSellingCard';

export default function BestSelling() {
  return (
    <div>
      <div className="best-selling">
        <h1>Best selling</h1>

        <p className="subtitle">
          Get in on the trend with our curated selection of best-selling styles.
        </p>


        <div className="products">
            <BestSellingCard 
                img={N1} 
                title={"Regular Fit Long Sleeve Top"} 
                price={'$38.99'} 
                rating={'5.0'} 
                bc={"#373737"}
            />
            <BestSellingCard 
                img={N2} 
                title={"Black Crop Tailored Jacket"} 
                price={'$62.99'} 
                rating={'4.9'} 
                bc='#A9D4BA'
            />

            <BestSellingCard 
                img={N3} 
                title={'Textured Sunset Shirt'} 
                price={'$49.99'} 
                rating={'5.0'} 
                bc="#CADCD0"
            />
        </div>

        <button className="see-all" type="button">
          See all <span>→</span>
        </button>
      </div>
    </div>
  );
}