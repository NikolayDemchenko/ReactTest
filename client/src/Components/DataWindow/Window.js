import React from "react";
import Slider from "./WindowSlider";
import NavigationPanel from "./Navigation/NavigationPanel";
import Content from "./Content/Content";
import style from "./Window.module.css";

const Window = props => {
  // Генерация слайдера
  const slideCount = 8;
  const SlideShow = () => (
    <div className={style.Slider}>
      <Slider count={slideCount} name="Баобоаб" />
    </div>
  );
  let Slides = () => <div />;
  if (slideCount > 0) {
    Slides = SlideShow;
  }
  return (
    <div>
      <div className={style.Header}>
        <Slides  />
        <div className={style.NavigationPanel}>
          <NavigationPanel slides={slideCount} />
        </div>
      </div>
      <div className={style.Content}>
        <Content  />
      </div>
    </div>
  );
};

export default Window;
