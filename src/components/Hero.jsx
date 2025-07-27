import React from "react";
import Button from "./Button";
import Image from "../assets/hero_img.png";
import MobileImage from "../assets/mobile_hero.png";

const Hero = () => {
  return (
    <div className="pt-[90px] max-w-[1220px] mx-[15px] md:mx-auto h-[100vh]">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mt-[50px] md:mt-0">
        <div className="block md:hidden w-full mx-auto">
          <img src={MobileImage} alt="mobile_image" className="w-[400px]" />
          <div className="w-[58%] mx-auto mt-[30px]">
            <Button name="Начать продвижение" />
          </div>
        </div>
        <div className="w-[400px] md:w-[695px] text-center md:text-left">
          <h1 className="text-[30px] md:text-[48px] font-semibold text-[28px]/[32px] md:text-[48px]/[50px]">
            Продвижение во всех соцсетях за пару кликов
          </h1>
          <p className="hidden md:block w-[550px] my-[20px] text-[18px]">
            Получайте подписчиков, лайки, репосты, просмотры, прослушивания и
            любую другую активность на свои профили в социальных сетях по самым
            низким ценами на рынке и в самые быстрые сроки!
          </p>
          <p className="block md:hidden w-[330px] my-[20px] mx-auto text-[17px]">
            Получайте подписчиков, лайки, репосты, просмотры, прослушивания и
            любую другую активность на свои профили в социальных сетях.
          </p>
          <div className="hidden md:block">
            <Button name="Начать продвижение" />
          </div>
        </div>
        <div className="hidden md:block w-[50%]">
          <img src={Image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
