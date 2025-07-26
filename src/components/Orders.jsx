import React from "react";
import Instagram from "../assets/Instagram.png";
import VK from "../assets/VK.png";
import TikTok from "../assets/Tik_Tok.png";
import Telegram from "../assets/Telegram.png";
import YouTube from "../assets/YouTube.png";
import Facebook from "../assets/Facebook.png";
import Twitter from "../assets/Twitter.png";
import Twitch from "../assets/Twitch.png";
import RuTube from "../assets/RuTube.png";
import Right from "../assets/right.png";
import Male from "../assets/male.png";
import Like from '../assets/like.png';
import Views from '../assets/views.png';
import Comment from '../assets/comment.png';
import Camera from '../assets/camera.png';
import Female from '../assets/female.png';
import Growth from '../assets/growth.png';
import Movie from '../assets/movie.png';
import Reels from '../assets/bomb.png';

const Networks = () => {
  const networkCards = [
    { name: "Подписчики", img: Male },
    { name: "Лайки", img: Like },
    { name: "Просмотры", img: Views },
    { name: "Комментарии", img: Comment },
    { name: "Просмотры", img: Camera },
    { name: "Зрители в прямой", img: Female },
    { name: "Статистика", img: Growth },
    { name: "IGTV", img: Movie },
    { name: "Reels", img: Reels }, 
  ];
  return (
    <div className="bg-[#0058FF] h-[100vh]">
      <div className="max-w-[1220px] mx-auto">
        <h2 className="text-center text-white text-[32px] font-semibold py-[30px]">
          Быстрый заказ
        </h2>
        <div className="flex items-center w-[1181px] gap-[15px] mx-auto bg-white rounded-[10px] relative overflow-hidden">
          <img src={Instagram} className="cursor-pointer" alt="instagram" />
          <img src={VK} className="cursor-pointer" alt="instagram" />
          <img src={TikTok} className="cursor-pointer" alt="instagram" />
          <img src={Telegram} className="cursor-pointer" alt="instagram" />
          <img src={YouTube} className="cursor-pointer" alt="instagram" />
          <img src={Facebook} className="cursor-pointer" alt="instagram" />
          <img src={Twitter} className="cursor-pointer" alt="instagram" />
          <img src={Twitch} className="cursor-pointer" alt="instagram" />
          <img src={RuTube} className="cursor-pointer" alt="instagram" />
          <img
            src={Right}
            alt="right_button"
            className="absolute right-0 pr-1 bg-gradient-to-l from-[#ffffffb2] to-[#fff] pl-[10px] cursor-pointer shadow-md shadow-[#ffffffad]"
          />
        </div>
      <div className="grid grid-cols-5 w-[1181px] mx-auto gap-[20px] my-[20px]">
        {networkCards.map((item, index) => {
          return (
            <div key={index} className="bg-white flex cursor-pointer items-center justify-center flex-col w-[220px] h-[170px] rounded-[10px]">
              <img src={item.img} alt={item.name} />
              <p className="mt-[10px] font-medium text-[20px]">{item.name}</p>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Networks;
