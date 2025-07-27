import { ordersData } from "../OrdersData";

const ServicesItem = () => {
  return (
    <div className="max-w-[1220px] mx-auto mt-[15px]">
      <div className="flex justify-between items-top gap-[20px]">
        {ordersData.slice(0, 7).map((item, index) => {
          return(
          <div key={index} className="flex flex-col gap-[6px]">
            <div>
              <img src={item.img} alt="logo" className="mb-2" />
            </div>
            {item.items.map((item) => (
              <a href={item.link} className="text-[14px] hover:text-[#0077FF]">
                {item.name}
              </a>
            ))}
          </div>
          )
        })}
      </div>
      <div className="flex justify-between items-top gap-[20px] mt-[15px]">
        {ordersData.slice(0, 7).map((item, index) => {
          return(
          <div key={index} className="flex flex-col gap-[6px]">
            <div>
              <img src={item.img} alt="logo" className="mb-2" />
            </div>
            {item.items.map((item) => (
              <a href={item.link} className="text-[14px] hover:text-[#0077FF]">
                {item.name}
              </a>
            ))}
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default ServicesItem;
