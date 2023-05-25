import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Trending = () => {
    const [loading,setLoading] = useState(true)
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://playfulrides-server.vercel.app/api/toys')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setLoading(false)
            AOS.init({
                duration: 1000,  // Animation duration (in milliseconds)
                easing: 'ease-in-out',  // Animation easing function
                once: true,  // Animation occurs only once
                mirror: true,  // Animation runs in reverse on scroll up
              });
        })
    },[])
    if(loading){
        return <div>Loadin...</div>
    }
    return (
        <div className='container mx-auto py-8'>
            <h3 className='text-center text-5xl font-bold' data-aos="fade-up">Trending Products</h3>
            <p className='text-center mt-4 mb-4' data-aos="fade-up">Best car toys for kids, get at affordable price.</p>
            <button className="rounded-full bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 block mx-auto" data-aos="fade-up">
                    Shop Now
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full mx-auto" data-aos="fade-up">
                {
                    products.slice(0,3).map((product)=><ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Trending;