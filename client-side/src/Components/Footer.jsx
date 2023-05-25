import React from 'react';
import logo from './../assets/logo/logo_transparent.png'
import payment from './../assets/payment/payment.png'

const Footer = () => {
    
    return (
        <div className='bg-gray-600 relative bottom-0'>
            {/* top */}
            <div className='grid grid-cols-1 lg:grid-cols-4 items-center text-white p-3'>
                <div className='lg:p-4'>
                    <div>
                        <img src={logo} alt="" className='w-2/4' />
                    </div>
                    <p>
                    Discover the perfect ride for your little one and let their imagination soar with PlayfulRides!
                    </p>
                </div>
                <div className='text-white'>
                    <h3 className='font-semibold text-3xl'>Quick Links</h3>
                    <ul className='text-lg'>
                        <li><a>Support</a></li>
                        <li><a>Help Line</a></li>
                        <li><a>About</a></li>
                        <li><a>Career</a></li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h3 className='font-semibold text-3xl'>Other Links</h3>
                    <ul className='text-lg'>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Login</a></li>
                        <li><a>Help</a></li>
                    </ul>
                </div>
                <div className='text-white'>
                    <h3 className='font-semibold text-3xl'>Contact Information</h3>
                    <p>
                        14192 LITTLE RD
                        KINGSTON, OK 73439-4038
                        <br />
                        Email: info@playfulrides.com
                        <br />
                        Telephone: +00 123 456 789

                    </p>
                    <img src={payment} alt="" />
                </div>

            </div>

            {/* bottom */}
            <div className='bg-[#262626] text-white text-center p-3'>
                <p>All Rights Reserved By ©PlayfulRides </p>

            </div>

        </div>
    );
};

export default Footer;