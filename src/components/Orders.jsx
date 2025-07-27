import React, { useState } from "react";
import Right from "../assets/right.png";
import {ordersData} from "../OrdersData";

const Networks = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="bg-[#0058FF] h-[100vh]">
      <div className="max-w-[1220px] mx-auto">
        <h2 className="text-center text-white text-[32px] font-semibold py-[30px]">
          Быстрый заказ
        </h2>
        <div className="flex items-center bg-white rounded-[10px] relative overflow-hidden">
          {ordersData.map(
            (item, index) => (
              <img
                key={index}
                src={item.img}
                alt=""
                 onClick={() => setSelectedIndex(index)}
                 className={`cursor-pointer px-[12px] py-[8px] hover:bg-[#EDF1FB] transition 
                ${selectedIndex === index ? "bg-[#EDF1FB]" : ""}`}
              />
            )
          )}
          <img
            src={Right}
            alt="right_button"
            className="absolute right-0 pr-1 bg-gradient-to-l from-[#ffffffb2] to-[#fff] pl-[10px] cursor-pointer shadow-md shadow-[#ffffffad]"
          />
        </div>
        <div className="grid grid-cols-5 gap-[20px] my-[20px]">
          {ordersData[selectedIndex].items.map((item, index) => {
            return(
              <div
                key={index}
                className="bg-white flex cursor-pointer items-center justify-center flex-col w-[220px] h-[170px] rounded-[10px]"
              >
                <img src={item.icon} alt={item.icon} />
                <p className="mt-[10px] font-medium text-[20px]">{item.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Networks;
