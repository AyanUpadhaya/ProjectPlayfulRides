import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../CustomHooks/useTitle';

const MyToys = () => {
    const { user, loading } = useContext(AuthContext)
    const [allToys, setAllToys] = useState([])
    const navigate = useNavigate()
    //SORTING-----------------------------------
    const [sortOrder, setSortOrder] = useState('')
    //sorting api calling
    const fetchProducts = (sortedOrder,email) => {
        fetch(`https://playfulrides-server.vercel.app/products/${sortedOrder}?email=${email}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    };
    //handle sort order
    const handleSortChange = (e) => {
        const selectedSortOrder = e.target.value;
        // console.log(user.email)
        if(selectedSortOrder == 'none'){
            fetchRequest(user.email)
        }
        console.log(selectedSortOrder)
        setSortOrder(selectedSortOrder)
        fetchProducts(selectedSortOrder,user.email);
    }


    useEffect(() => {
        if (user && user.email) {
            fetchRequest(user.email)
        }
    }, [user])
    useTitle('PlayfulRides | My Toys')
    //default fetch request
    const fetchRequest = async (email) => {
        try {
            const response = await fetch(`https://playfulrides-server.vercel.app/api/toys?email=${email}`)
            const data = await response.json()
            setAllToys(data)
        } catch (err) {
            console.log(err)
        }
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Do you want to Delete this?',

            showCancelButton: true,
            confirmButtonText: 'Delete',

        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`https://playfulrides-server.vercel.app/api/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', '', 'success')
                            setAllToys(allToys.filter(toy => toy._id !== id))
                        }
                    })
                    .catch(err => console.log(err));

            }
        })

    }

    const handleUpdate = (id) => {
        navigate(`/update/${id}`)
    }

    if (loading) {
        return (
            <div className="container mx-auto">
                <div>
                    <progress className="progress progress-primary w-56" value="100" max="100"></progress>
                </div>
            </div>
        )
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-4xl text-center mb-3 font-semibold'>My Toys</h2>

            <div className='overflow-x-auto'>
                <div>
                    <h4 className='font-semibold'>Sort by Price</h4>
                    <select id="sortOrder" value={sortOrder} onChange={handleSortChange}>
                        <option value="none">None</option>
                        <option value="htl">Price High to Low</option>
                        <option value="lth">Price Low to High</option>
                    </select>
                </div>
                <table className='table w-full divide-y divide-gray-200'>
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allToys.map((toy, index) => (
                            <tr key={index}>
                                <td className='whitespace-nowrap'>
                                    <img src={toy.pictureUrl} alt="" className='w-30 h-16' />
                                </td>
                                <td className='whitespace-nowrap'>{toy.name.length > 20 ? toy.name.slice(0, 20) : toy.name}</td>
                                <td className='whitespace-nowrap'>{toy.category}</td>
                                <td className='whitespace-nowrap'>{toy.price}$</td>
                                <td className='whitespace-nowrap'>{toy.quantity}</td>
                                <td className='space-x-3 whitespace-nowrap'>
                                    <button className="rounded-full bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4"
                                        onClick={() => handleDelete(toy._id)}>
                                        Delete
                                    </button>
                                    <button className="rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4"
                                        onClick={() => handleUpdate(toy._id)}>
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

};

export default MyToys;