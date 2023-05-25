import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../Providers/AuthProviders';
const Seller = () => {
    const {user} = useContext(AuthContext)
    useEffect(() => {

        AOS.init({
            duration: 1000,  
            easing: 'ease-in-out', 
            once: true, 
            mirror: true,
          });
    }, [])
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://iili.io/HgWAg99.png" load="lazy"  className="max-w-sm rounded-lg shadow-2xl" data-aos="fade-up"/>
                <div>
                    <h1 className="text-5xl font-bold" data-aos="fade-up">Start Selling</h1>
                    <p className="py-6" data-aos="fade-up">
                        Become a seller in our platform and start earning through e-commerce
                    </p>
                    {user?
                    <Link to="/add_toy">
                        <button className="btn btn-primary" data-aos="fade-up">Add Product</button>
                    </Link>:
                    <Link to="/register"><button className="btn btn-primary" data-aos="fade-up">Get Started</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Seller;