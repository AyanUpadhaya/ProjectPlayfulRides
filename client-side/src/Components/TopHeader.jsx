import React from 'react';
import { FaAddressBook, FaBeer,FaPhoneAlt,FaShoppingCart } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
const TopHeader = () => {
    return (
        <div className='bg-cs-light text-cs-primary p-2'>
            <div className='container mx-auto'>
            <div className='flex'>
                <div className='flex-1'>
                    Get Free Shipping Over 35$ Purchase!
                </div>
                <div>
                    <ul className='hidden lg:flex space-x-6'>
                        <li className='flex items-center'><MdEmail></MdEmail><a>info@playfulrides.com</a></li>
                        <li className='flex items-center'><FaPhoneAlt></FaPhoneAlt><a>+00 123 456 789</a></li>
                        <li className='flex items-center'><FaAddressBook></FaAddressBook><a>14192 LITTLE RD</a></li>
                    </ul>
                </div>
            </div>
            
        </div>

        </div>
        
    );
};

export default TopHeader;