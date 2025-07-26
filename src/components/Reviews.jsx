import React from "react";
import User from "../assets/avatarka.png";
import Stars from "../assets/stars.png";
import Button from "./Button";
import ReviewsImg from '../assets/reviews_img.png';

const Reviews = () => {
  const clients = [
    {
      name: "Xасан ",
      comment:
        "Купила подписчиков в Instagram через SMMFLOW, очень довольна результатом. Поступали плавно и незаметно, что важно для меня. ",
    },
    {
      name: "Алем",
      comment:
        "Приобрел подписчиков и лайки на TikTok, результат превзошел все ожидания. Быстро, качественно, оправдало свои деньги. Рекомендую!",
    },
    {
      name: "Эзоза",
      comment:
        "Я не ожидала, что продвижение в Instagram может быть таким простым. Заказала подписчиков через SMMFLOW и очень довольна результатом.",
    },
    {
      name: "Азамат",
      comment:
        "SMMFLOW помог мне продвинуть канал на YouTube. Заказывал подписчиков и лайки, все прошло быстро и качественно, всем рекомендую!",
    },
    {
      name: "Абдулворис",
      comment:
        "Воспользовалась услугами SMMFLOW для продвижения своего TikTok аккаунта. Очень рада результату, получила множество новых подписчиков и просмотров.",
    },
  ];
  return (
    <>
      <h2 className="text-center text-[32px] font-semibold py-[30px]">
        Отзывы клиентов
      </h2>
      <div className="my-[20px] flex items-center gap-[30px] overflow-x-auto overflow-y-hidden cursor-grab active:cursor-grabbing">
        {clients.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#F8F8F9] p-[20px] rounded-[14px] min-w-[315px] min-h-[290px]"
            >
              <div className="flex items-center gap-[10px]">
                <img src={User} alt="user_img" />
                <div>
                  <p className="text-[#19191B] text-[16px] font-medium">
                    {item.name}
                  </p>
                  <img src={Stars} alt="stars_img" />
                </div>
              </div>
              <div>
                <p className="text-[#5F5F66] text-[18px] mt-[30px]">
                  {item.comment}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-[1220px] mx-auto bg-[#0058FF] text-white flex items-center justify-between px-[130px] rounded-[40px] my-[70px]">
        <div>
            <h2 className="font-semibold text-[32px]">Скидки до 50% <br />в нашем телеграм-канале</h2>
            <p className="text-[18px] mt-[10px] mb-[30px]">Раздаем промокоды в Telegram каждую неделю</p>
            <Button name='Получить промокод' />
        </div>
        <div>
            <img src={ReviewsImg} alt="reviews_img" className="w-[300px]" />
        </div>
      </div>
    </>
  );
};

export default Reviews;
