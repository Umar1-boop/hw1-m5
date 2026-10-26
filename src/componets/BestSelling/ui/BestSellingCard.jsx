import N1 from '../../../img/N1.png'

export default function BestSellingCard({img, title, price, rating, bc}) {
  return (
    <div className="product">
        <div className="product-image first" style={{ backgroundColor: bc }}>
            <img src={img} alt="Regular Fit Long Sleeve Top" />
            </div>

        <h2>{title}</h2>
            <div className="product-info">
                <span>{price}</span>
                <span className="line"></span>
                <span>{rating}<span className="star">★</span></span> 
            </div>

    </div>
  )
}
