import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    MdOutlineWarehouse,
    MdOutlineLocalShipping
} from 'react-icons/md';
import useTitle from '../CustomHooks/useTitle';
const ProductDetails = () => {
    const product = useLoaderData()
    const [loader, setLoader] = useState(true);
    // destructuring
    const { pictureUrl,
        name,
        sellerName,
        sellerEmail,
        category,
        price,
        ratings,
        quantity,
        detailDescription } = product
    useTitle('PlayfulRides | Details')

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-8 md:flex gap-3">
                {product ? (
                    <>
                        {/* Left side */}
                        <div className="w-full md:w-1/2 mb-4 md:mb-0">
                            <img
                                src={pictureUrl}
                                className="w-full rounded-lg"
                                loading="lazy"
                            />

                        </div>

                        {/* Right side */}
                        <div className="w-full md:w-1/2 ">
                            <div className="bg-white p-8 shadow-lg rounded-lg">
                                <h3 className="text-3xl font-semibold mb-4">Price: {price}$</h3>
                                <p className="small font-semibold mb-4">Availabel Qty: {quantity} </p>
                                <p className="small mb-5 flex gap-2 items-center"><MdOutlineLocalShipping></MdOutlineLocalShipping>Shipping, arrives by tomorrow<br></br></p>
                                <p className="small mb-5 flex gap-2 items-center"><MdOutlineWarehouse></MdOutlineWarehouse>Sold and shipped by PlayfulRides</p>

                                <div className='space-x-3'>
                                    <button className="rounded-full bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4">
                                        Add to Cart
                                    </button>
                                    <button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4">
                                        Buy Now
                                    </button>

                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold mt-4">{name}</h2>
                                    <p className="text-gray-600 mt-2">{detailDescription}</p>
                                    <div className="flex items-center mt-4 space-x-5">
                                        <span className="text-gray-500 mr-2">Rating:</span>
                                        <span>{ratings}</span>
                                        <span className="text-gray-500 mr-2">Category:</span>
                                        <span>{category.toUpperCase()}</span>
                                    </div>
                                    <hr />
                                    <div className="flex items-center mt-4 space-x-5">
                                        <span className="text-gray-500 mr-2">Seller:</span>
                                        <span>{sellerName}</span>
                                        <span className="text-gray-500 mr-2">Email:</span>
                                        <span>{sellerEmail}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="container mx-auto">
                        <div>
                            <progress className="progress progress-primary w-56" value="100" max="100"></progress>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;