import React from 'react';
import './../CustomCSS/CustomCss.css'
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
    const { _id, name, pictureUrl,price,ratings } = product
    const navigate = useNavigate()
    return (
        <div className="card w-100 bg-base-100 shadow-xl my-3 py-5 px-2">
            <img src={pictureUrl} className='card-img' alt="Shoes" />
            <div className="card-body relative py-5">
                <h2 className="card-title">{name}</h2>
                <p className='py-2'>Price: {price}$</p>
                <p className='py-2'>Ratings: {ratings}</p>
                <div className="card-actions justify-end my-5">
                    <button onClick={()=>navigate(`/all_toys/${_id}`)} 
                    className="btn btn-secondary text-white absolute bottom-0">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;