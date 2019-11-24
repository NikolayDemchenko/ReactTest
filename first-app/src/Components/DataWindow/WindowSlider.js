import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const WindowSlider = props => {  
  const GenerateSlideItem = (itemName, itemClassName, quantity) => {
    const items = [];
    for (let i = 0; i < quantity; i++) {
      items.push(
        <div key={i} className={itemClassName}>
          <div className="Icon">{i + 1}</div>
          <div className="Name">{itemName}</div>
        </div>
      );
    }
    return items;
  };
  const Items = GenerateSlideItem(props.name, "Slide", props.count);
  const settings = {
    // centerMode: true,
    rows: 1,
    infinite: true, 
    focusOnSelect: true,
    speed: 300,
    slidesToShow: 9,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 6
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return <Slider {...settings}>{Items}</Slider>;
};

export default WindowSlider;
