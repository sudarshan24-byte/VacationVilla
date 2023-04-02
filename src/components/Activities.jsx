import React from 'react'

const Activities = () => {
    return (
        <div className='max-w-7xl mt-[-100px] mx-auto p-4 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <div className='font-bold px-2 pt-4 text-2xl bottom-6'>
                        <p>Discover new cultures with our cultural excursions and tours.</p>
                    </div>
                    <p className='px-2'>User's Choice</p>
                    <button className='bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white duration-500'>Book Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="" />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <div className='font-bold px-2 pt-4 text-2xl bottom-6'>
                        <p>Unwind in luxury with our private beach.</p>
                    </div>
                    <p className='px-2'>User's Choice</p>
                    <button className='bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white duration-500'>Book Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="" />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <div className='font-bold px-2 pt-4 text-2xl bottom-6'>
                        <p>Relax in style with our spacious suites and villas.</p>
                    </div>
                    <p className='px-2'>User's Choice</p>
                    <button className='bg-white text-black mx-2 absolute bottom-4 hover:bg-black hover:text-white duration-500'>Book Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
                    src='https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt="" />
            </div>
        </div>
    )
}

export default Activities
