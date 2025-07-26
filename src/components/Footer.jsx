import React from "react";
import Logo from "../assets/logo.png";
import MirCard from "../assets/mir_card.png";
import VisaCard from "../assets/visa_card.png";
import MasterCard from "../assets/master_card.png";
import Qiwi from "../assets/qiwi.png";

const Footer = () => {
  return (
    <div className="bg-[#F8F8F9] mt-[100px]">
    <div className="max-w-[1220px] mx-auto flex items-top justify-between gap-[20px] py-[40px]">
      <div className="flex flex-col gap-[15px] w-[350px]">
        <img src={Logo} alt="logo" className="w-[136px]" />
        <p className="text-[14px]">
          SMMFLOW - сервис, где вы сможете приобрести качественное продвижение в
          социальных сетях по выгодным ценам.
        </p>
        <div className="flex items-center gap-[15px]">
          <img src={MirCard} alt="mir_card" />
          <img src={VisaCard} alt="visa_card" />
          <img src={MasterCard} alt="master_card" />
          <img src={Qiwi} alt="qiwi_wallet" />
        </div>
      </div>
      <div className="flex flex-col gap-[15px] text-[16px]">
        <a href="">Каталог услуг</a>
        <a href="">Преимущества</a>
        <a href="">Отзывы</a>
      </div>
      <div className="flex flex-col gap-[15px] text-[16px]">
        <a href="">Политика конфиденциальности</a>
        <a href="">Публичная оферта</a>
        <a href="">Пользовательское соглашение</a>
        <a href="">Правила сервиса</a>
        <a href="">Контакты</a>
      </div>
      <div className="flex flex-col gap-[15px] text-[16px]">
        <a href="">Нужна помощь?</a>
        <button className="bg-[#EBEBEB] p-[15px] rounded-[4px] cursor-pointer">Онлайн-чат</button>
        <a href="mailto: support@smmflow.net">support@smmflow.net</a>
      </div>
    </div>
    </div>
  );
};

export default Footer;
