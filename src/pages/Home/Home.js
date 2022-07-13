import Banner from "./Banner/Banner";
import ChooseUs from "./ChooseUs/ChooseUs";
import InventoryHome from "./InventoryHome/InventoryHome";
import Location from "./Location/Location";

const Home = () => {
    return (
        <div>
  
         <Banner></Banner>
        <InventoryHome></InventoryHome>
         <ChooseUs></ChooseUs>
         <Location></Location>

         
        </div>
    );
};

export default Home;