import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
    useEffect(() => {
        
        AOS.init({
            duration: 1000,  // Animation duration (in milliseconds)
            easing: 'ease-in-out',  // Animation easing function
            once: true,  // Animation occurs only once
            mirror: true,  // Animation runs in reverse on scroll up
          });
    }, [])
    return (
        <div className='container mx-auto lg:flex justify-around items-center py-8'>
            <div className='p-5 space-y-10 w-full lg:w-2/4' data-aos="fade-up">
                <h2 className='text-6xl font-bold'>
                    Best Toy Cars for<br></br>
                    Kids..
                </h2>
                <p className='w-full lg:w-3/4'>
                Welcome to PlayfulRides, where imagination meets adventure! We offer a wide selection of high-quality toy cars that will ignite the joy and excitement in children of all ages. Discover the perfect ride for your little one and let their imagination soar with PlayfulRides!
                </p>
                <button className="rounded-full bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4">
                    Shop Now
                </button>
            </div>
            <div data-aos="fade-up" className='w-full lg:w-2/4'>
                <img src="https://iili.io/HgWU6Mu.jpg" className='w-full rounded-8' alt="" />
            </div>
            
        </div>
    );
};

export default Banner;