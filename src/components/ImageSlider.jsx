import React, { useState } from 'react'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs'
import { BiRadioCircleMarked } from 'react-icons/bi'

const ImageSlider = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        },
        {
            url: 'https://images.pexels.com/photos/6580230/pexels-photo-6580230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]

    const [index, setIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = index === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : index - 1;
        setIndex(newIndex);
    }

    const nextSlide = () => {
        const isNextSlide = index === slides.length - 1
        const newIndex = isNextSlide ? 0 : index + 1
        setIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setIndex(slideIndex);
    };

    return (
        <div className='py-4'>
            <div className='flex flex-col items-center text-center justify-center mt-10'>
                <div className='flex flex-col items-end'>
                    <h3 className='text-4xl mb-2'>Our Rooms</h3>
                    <div className="h-1 w-20 bg-black rounded"></div>
                </div>
            </div>
            <div className='max-w-[1400px] h-[600px] m-auto w-full py-10 px-4 relative'>
                {/* <h1 className='text-center pb-8 text-2xl font-bold'>Gallery</h1> */}
                <div style={{ backgroundImage: `url(${slides[index].url})` }}
                    className='w-full h-full rounded-2xl bg-cover bg-center transition-all duration-1000 group'>
                    <div className='text-white group-hover:bg-black/70 rounded-full w-fit z-30 relative p-2 top-[45%] ml-2 cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={40} />
                    </div>
                    <div className='relative flex justify-end top-[35%] mr-2 text-white'>
                        <div className='flex justify-end w-fit group-hover:bg-black/70 rounded-full p-2 cursor-pointer'>
                            <BsChevronCompactRight onClick={nextSlide} size={40} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center w-full p-3 text-xl'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className='text-2xl cursor-pointer'><BiRadioCircleMarked /></div>
                    ))}
                </div>
                {/* <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >
                        <BiRadioCircleMarked />
                    </div>
                ))}
            </div> */}
            </div>
        </div>
    )
}

export default ImageSlider