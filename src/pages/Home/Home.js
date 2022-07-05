import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
  
         <Banner></Banner>
        <Products></Products>
        
         <ChooseUs></ChooseUs>
         <Testimonials></Testimonials>
        </div>
    );
};

export default Home;