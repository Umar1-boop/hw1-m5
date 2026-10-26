import './ourProducts.css';
import product1 from '../../img/N1.png';
import OurProductsCard from './ui/OurProductsCard';

export default function OurProducts() {
  return (
    <section className='container product_container'>
        <h2>Our products</h2>


            <div className='products'>
                <OurProductsCard />
                <OurProductsCard />
                <OurProductsCard />
                <OurProductsCard />
                <OurProductsCard />
                <OurProductsCard />
            </div>  
    </section>
  )
}
