import React from 'react';
import Logo from '../assets/logo.png';
import Button from './Button';

const Header = () => {
    return (
        <div className='shadow-md fixed w-full z-999 bg-white'>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center py-[20px] '>
                <div className='flex items-center gap-[20px]'>
                    <a href='#'>
                        <img src={Logo} alt="logo" className='mr-[30px]' />
                    </a>
                        <a href="#">Услуги</a>
                        <a href="#">Преимущества</a>
                        <a href="#">Отзывы</a>
                </div>
                <div className='flex items-center gap-[20px]'>
                    <a href="#">Войти</a>
                    <Button name='Быстрый заказ' />
                </div>
            </div>
        </div>
    );
};

export default Header;