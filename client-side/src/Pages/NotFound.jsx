import React from 'react';
import image from './../assets/404/image.jpg'
import { useNavigate } from 'react-router-dom';
import useTitle from '../CustomHooks/useTitle';
const NotFound = () => {
    const navigate = useNavigate()
    useTitle('PlayfulRides | 404')
    return (
        <div className='container mx-auto'>
            <img src={image} alt="" className='w-full h-2/4 lg:w-3/4 mx-auto' />
            <div className='text-center'>
                <button className='btn btn-primary' onClick={()=>navigate('/')}>Go Home</button>
            </div>
        </div>
    );
};

export default NotFound;