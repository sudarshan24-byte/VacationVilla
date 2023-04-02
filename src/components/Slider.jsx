import React from 'react'
import { data } from '../data'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Slider = () => {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <div className='py-4'>
            <div className='flex flex-col items-center text-center justify-center my-10'>
                <div className='flex flex-col items-end'>
                    <h3 className='text-4xl mb-2'>Gallery</h3>
                    <div className="h-1 w-16 bg-black rounded"></div>
                </div>
            </div>
            <div className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div
                    id='slider'
                    className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                >
                    {data.map((item, i) => (
                        <img
                            key={i}
                            className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
                            src={item.img}
                            alt='/'
                        />
                    ))}
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
            </div>
        </div>
    );
}

export default Slider
