import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='z-[-1]'>
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""
                    className='h-[95vh] w-full mx-auto top-0 object-cover'
                />
                <div className='bg-black/60 absolute top-0 w-full h-[95vh] ' />
                <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                    <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
                        <p>All Inclusive</p>
                        <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
                            Private Beaches & Getaways
                        </h1>
                        <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut quis
                            est, id consequuntur sequi ipsum vitae sit non exercitationem.
                        </p>
                        <button className='hover:-translate-y-1 mt-1'>Reserve Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
