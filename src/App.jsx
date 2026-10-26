import Banner from "./componets/banner/Banner";
import Header from "./componets/header/Header";
import BestSelling from "./componets/BestSelling/BestSelling";
import './app.css';
import OurProducts from "./componets/ourProducts/OurProducts";


export default function App() {
  return (
    <div>
        <div className="top_container">
            <Header />
            <Banner />
        </div>
        <BestSelling />
        <OurProducts />
    </div>
  )
}
