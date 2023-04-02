import React from 'react'

const Destination = () => {
    return (
        <div className=' md:flex md:justify-evenly md:items-center bg-slate-300'>
            <div>
                <div className="overflow-hidden text-gray-700 max-w-screen w-full md:pl-10">
                    <div className="container px-5 py-2 md:py-24 lg:w-[50rem]">
                        <div className="flex -m-1 md:-m-2 ">
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://cdn.pixabay.com/photo/2016/09/18/23/23/sugarloaf-mountain-1679285_960_720.jpg" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://images.pexels.com/photos/2418958/pexels-photo-2418958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://images.pexels.com/photos/414061/pexels-photo-414061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://cdn.pixabay.com/photo/2017/03/02/12/33/murchison-national-park-2111157_960_720.jpg" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://images.pexels.com/photos/7053902/pexels-photo-7053902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt='gallery' className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://cdn.pixabay.com/photo/2020/04/05/07/25/sunset-5004905_960_720.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bottom-9 md:bottom-0 relative w-fit mx-6'>
                <h3 className='text-3xl lg:text-5xl font-bold py-4 md:mt-20 mt-10'>Discover the Popular Destination</h3>
                <h3 className='text-3xl pb-2'>Popular Destination</h3>
                <p className=' lg:w-[24rem] w-80 mb-7'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam unde enim beatae quam numquam animi.</p>
            </div>
        </div>
    )
}

export default Destination
