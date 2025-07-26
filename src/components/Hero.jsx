import React from "react";
import Button from "./Button";
import Image from '../assets/hero_img.png';

const Hero = () => {
  return (
    <div className="pt-[90px] max-w-[1220px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="w-[695px]">
          <h1 className="text-[48px] font-semibold text-[48px]/[50px]">Продвижение во всех соцсетях за пару кликов</h1>
          <p className="w-[550px] my-[20px]">
            Получайте подписчиков, лайки, репосты, просмотры, прослушивания и
            любую другую активность на свои профили в социальных сетях по самым
            низким ценами на рынке и в самые быстрые сроки!
          </p>
          <Button name='Начать продвижение' />
        </div>
        <div className="w-[50%]">
            <img src={Image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
