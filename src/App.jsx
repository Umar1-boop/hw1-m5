import Banner from "./componets/banner/Banner";
import Header from "./componets/header/Header";
import BestSelling from "./componets/BestSelling/BestSelling";
import './app.css';


export default function App() {
  return (
    <div>
        <div className="top_container">
            <Header />
            <Banner />
            <BestSelling />
        </div>
    </div>
  )
}
