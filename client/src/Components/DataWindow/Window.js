import React from "react";
import Slider from "./WindowSlider";
import NavigationPanel from "./NavPanel/NavigationPanel";
import Content from "./Content";
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
    <div cn={style.Window}>
      <div className={style.Header}>
        <div className={style.NavigationPanel}>
          <NavigationPanel slides={slideCount} />
        </div>
        <Slides  />
      </div>
      <div className={style.Content}>
        <Content items={props.items} />
      </div>
    </div>
  );
};

export default Window;
