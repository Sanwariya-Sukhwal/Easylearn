// import React from 'react'
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
  <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
       <div>
          <h1 className="font-semibold text-x1 pb-2">Free offered Course</h1>  
          <p>EasyLearn offers free courses in coding. Learn different programming languages with easy lessons and hands-on practice. Start learning for free today!</p>
       </div> 
      <div className="slider-container mx-4 my-6">
        <Slider {...settings}>
          {filterData.map((item)=>(
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  </>
  );
}

export default Freebook;
 