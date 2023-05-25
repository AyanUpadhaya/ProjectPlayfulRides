import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import Swal from 'sweetalert2';
import useTitle from '../CustomHooks/useTitle';

const Update = () => {
    const {loading,}= useContext(AuthContext);
    const data = useLoaderData();
    const navigate = useNavigate()
    useTitle('PlayfulRides | Update')
    const {
        _id,
        pictureUrl,
        name,
        sellerName,
        sellerEmail,
        category,
        price,
        ratings,
        quantity,
        detailDescription} = data;


    const handleUpdate =()=>{
        event.preventDefault();
        const form = event.target;
        const pictureUrl = form.pictureUrl.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const quantity = form.qty.value;
        const detailDescription = form.detailDescription.value;

        const product={pictureUrl,
            name,
            sellerName,
            sellerEmail,
            category,
            price,
            ratings,
            quantity,
            detailDescription}

        fetch(`https://playfulrides-server.vercel.app/api/toys/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.matchedCount>0){
                handleAlert()
                navigate(`/all_toys/${_id}`)
            }
        })
    }
    if(loading){
        return <div>Loading.....</div>
    }
    const handleAlert =()=>{
        Swal.fire('Saved!', '', 'success')
    }
    return (
        <div className='bg-cs-light w-full container mx-auto p-5 lg:w-3/4'>
            <div className="mt-4 ">
                <h2 className='text-4xl text-center mb-5'>Update Your Listing</h2>
                <form onSubmit={handleUpdate}>
                    <div className='lg:grid grid-cols-2 gap-3'>
                        <div className="w-full">
                            <label htmlFor="pictureUrl" className="text-gray-900">Picture URL</label>
                            <input
                                type="text"
                                name="pictureUrl"
                                defaultValue={pictureUrl}
                                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="name" className="text-gray-900">Name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="sellerName" className="text-gray-900">Seller Name</label>
                            <input
                                type="text"
                                name="sellerName"
                                defaultValue={sellerName}
                                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="sellerEmail" className="text-gray-900">Seller Email</label>
                            <input
                                type="email"
                                name="sellerEmail"
                                defaultValue={sellerEmail}
                                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="category" className="text-gray-900">Category</label>
                        <select
                            name="category" defaultValue={category}
                            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none">
                            <option value="sports car">Sports Car</option>
                            <option value="truck">Truck</option>
                            <option value="regular car">Regular Car</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className="w-full">
                            <label htmlFor="price" className="text-gray-900">Price</label>
                            <input
                                type="number"
                                name="price"
                                defaultValue={price}
                                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="ratings" className="text-gray-900">Ratings</label>
                            <input
                                type="text"
                                name="ratings"
                                defaultValue={ratings}
                                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                        <div className="w-full">
                            <label htmlFor="qty" className="text-gray-900">Qty</label>
                            <input
                                type="number"
                                name="qty"
                                defaultValue={quantity}
                                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <label htmlFor="detailDescription" className="text-gray-900">Description</label>
                        <textarea
                            name="detailDescription"
                            defaultValue={detailDescription}
                            className="border border-gray-300 rounded-md p-2 w-full h-64 focus:outline-none"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-2/4 block mx-auto py-2 px-4 mt-4 bg-[#AD7A7D] text-white rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Update Product
                    </button>
                </form>
                {/* <button className='btn btn-primary' onClick={handleAlert}>click</button> */}
            </div>
        </div>
    );
};

export default Update;