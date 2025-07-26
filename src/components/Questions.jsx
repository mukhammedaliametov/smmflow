import React from 'react';
import down from '../assets/down.png';

const Questions = () => {
    return (
        <div className='max-w-[1220px] mx-auto'>
            <h2 className="text-center text-[32px] font-semibold mb-[20px]">Частые вопросы</h2>
            <div className='grid grid-cols-2 gap-[20px]'>
                <div className='bg-[#F8F8F9] flex justify-between items-center p-[20px] cursor-pointer text-[16px] font-medium rounded-[10px]'>
                    <p>Почему цены на ваши услуги ниже, чем у конкурентов?</p>
                    <img src={down} alt="down" />
                </div>
                <div className='bg-[#F8F8F9] flex justify-between items-center p-[20px] cursor-pointer text-[16px] font-medium rounded-[10px]'>
                    <p>Как вы гарантируете качество услуг?</p>
                    <img src={down} alt="down" />
                </div>
                <div className='bg-[#F8F8F9] flex justify-between items-center p-[20px] cursor-pointer text-[16px] font-medium rounded-[10px]'>
                    <p>Как я могу узнать о статусе моего заказа?</p>
                    <img src={down} alt="down" />
                </div>
                <div className='bg-[#F8F8F9] flex justify-between items-center p-[20px] cursor-pointer text-[16px] font-medium rounded-[10px]'>
                    <p>Как быстро выполняется заказ?</p>
                    <img src={down} alt="down" />
                </div>

                <div className='bg-[#F8F8F9] flex justify-between items-center p-[20px] cursor-pointer text-[16px] font-medium rounded-[10px]'>
                    <p>Какие способы оплаты вы принимаете?</p>
                    <img src={down} alt="down" />
                </div>
                <div className='bg-[#F8F8F9] flex justify-between items-center p-[20px] cursor-pointer text-[16px] font-medium rounded-[10px]'>
                    <p>Меня не заблокируют?</p>
                    <img src={down} alt="down" />
                </div>
                <div className='bg-[#F8F8F9] flex justify-between items-center p-[20px] cursor-pointer text-[16px] font-medium rounded-[10px]'>
                    <p>Как я могу связаться с вами?</p>
                    <img src={down} alt="down" />
                </div>
                <div className='bg-[#F8F8F9] flex justify-between items-center p-[20px] cursor-pointer text-[16px] font-medium rounded-[10px]'>
                    <p>Что произойдет, если мои подписчики или лайки уйдут?</p>
                    <img src={down} alt="down" />
                </div>
            </div>
        </div>
    );
};

export default Questions;