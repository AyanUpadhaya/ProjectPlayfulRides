
import './../CustomCSS/CustomCss.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ImageGallery = () => {
    useEffect(() => {
        
        AOS.init({
            duration: 1000,  // Animation duration (in milliseconds)
            easing: 'ease-in-out',  // Animation easing function
            once: true,  // Animation occurs only once
            mirror: true,  // Animation runs in reverse on scroll up
          });
    }, [])
    return (
        <div className='bg-base-200 py-5'>
            <div className='container mx-auto'>
            <h3 className='text-center text-5xl font-bold' data-aos="fade-up">Get Best Deals</h3>
            <p className='text-center mt-4 mb-4' data-aos="fade-up">Best car toys for kids, get at affordable price</p>
            <button className="rounded-full bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 block mx-auto" data-aos="fade-up">
                    Shop Now
            </button>
            <div className="grid grid-cols-3 gap-2 p-5" id="img-gallery">
                <div className="col-span-2 sm:col-span-1">
                    <img src="https://iili.io/Hg1g1Ia.jpg" alt="Image 1" className="img border-gray-500  shadow-lg" data-aos="zoom-in"/>
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <img src="https://iili.io/HgYUj2a.jpg" alt="Image 2" className="img border-gray-500  shadow-lg" data-aos="zoom-in" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <img src="https://iili.io/HgW0AXt.jpg" alt="Image 3" className="img border-gray-500  shadow-lg" data-aos="zoom-in" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <img src="https://iili.io/HgadRdG.jpg" alt="Image 4" className="img border-gray-500  shadow-lg" data-aos="zoom-in" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <img src="https://iili.io/HgWYkxe.jpg" alt="Image 5" className="img border-gray-500  shadow-lg" data-aos="zoom-in" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <img src="https://iili.io/HganlhG.jpg" alt="Image 6" className="img border-gray-500  shadow-lg" data-aos="zoom-in" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default ImageGallery;
