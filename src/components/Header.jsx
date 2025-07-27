import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Button from "./Button";
import ServicesItem from "./ServicesItem";
import Menu from "../assets/menu.png";
import Close from "../assets/close.png";

const Header = () => {
  const [serviceItem, setServiceItem] = useState(false);
  const [isNav, setIsNav] = useState(false);
  const handleService = () => setServiceItem(!serviceItem);
  const handleClick = () => setIsNav(!isNav);

  return (
    <div className="shadow-md fixed w-full z-999 bg-white">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center py-[20px] ">
        <div className="hidden md:flex items-center gap-[20px]">
          <a href="#">
            <img src={Logo} alt="logo" className="mr-[30px]" />
          </a>
          <a
            href="#"
            onClick={handleService}
            className={
              serviceItem ? "text-[#0077FF] " : "text-black hidden md:block"
            }
          >
            Услуги
          </a>
          <a href="#">Преимущества</a>
          <a href="#">Отзывы</a>
        </div>
        <div className="hidden md:flex items-center gap-[20px]">
          <a href="#">Войти</a>
          <Button name="Быстрый заказ" />
        </div>
        <div className="flex md:hidden items-center justify-between w-full px-[20px]">
          <a href="#">
            <img src={Logo} alt="logo" className="mr-[30px]" />
          </a>
          <div onClick={handleClick}>
            <img src={isNav ? Close : Menu} alt="" />
          </div>
          <div className={isNav ? 'absolute bg-white flex flex-col md:hidden top-[60px] left-0 w-full gap-[20px] py-[40px] px-[20px]' : 'absolute bg-white flex flex-col md:hidden top-[60px] left-[-800px] w-full gap-[20px] py-[40px] px-[20px]'}>
            <a href="" className='text-[25px]'>Сделать заказ</a>
            <a href="" className='text-[25px]'>Мои заказы</a>
            <a href="" className='text-[25px]'>Пополнить баланс</a>
            <a href="" className='text-[25px]'>Настройки</a>
            <a href="" className='text-[25px]'>Настройки</a>
          </div>
        </div>
      </div>
      <div className={serviceItem ? "block" : "hidden"}>
        <ServicesItem />
      </div>
    </div>
  );
};

export default Header;
