import { useState } from "react";
import { Carousel } from "react-bootstrap";
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block  bannerImg"
            src="https://i.ibb.co/cvsrN0x/2021-ASUS-Vivobook.jpg"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block bannerImg"
            src="https://i.ibb.co/Jd1Fszr/2022-ASUS-TUF-Dash.jpg"
            alt="Second slide"
          />
  
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block bannerImg"
            src="https://i.ibb.co/2qrsYkT/ASUS-Expert-Book-B5-Thin-Light-Flip-Business-Laptop.jpg"
            alt="Third slide"
          />
  
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;