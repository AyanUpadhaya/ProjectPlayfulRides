import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../CustomHooks/useTitle';
import { Link } from 'react-router-dom';





const AllToys = () => {
    //STATES-------------------------------------
    const [toys, setToys] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [loader,setLoader] = useState(true);
    //-------------------------------------------
    //default fetch
    useEffect(() => {
        fetch('https://playfulrides-server.vercel.app/api/toys')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setToys(data)
            setLoader(false)
        })
        
    }, [])
    //title hook
    useTitle('PlayfulRides | All Toys')
    
    // Filter toys based on search term
    //------------------------------------
    const allToys = toys.filter(toy =>
        toy.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    

    if(loader){
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
            <div>
                <h2 className='text-4xl text-center mb-3 font-semibold'>Our All Toys</h2>
                <div className="flex justify-between">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={event => setSearchTerm(event.target.value)}
                    placeholder="Search By Name"
                    className="input input-bordered rounded-none input-accent w-full max-w-xs mb-4"
                />

                    
                </div>
                <div className='overflow-x-auto'>
                <table className='table w-full text-center'>
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allToys.map((toy, index) => (
                            <tr key={index}>
                                <td>{toy.sellerName?toy.sellerName:''}</td>
                                <td>{toy.name.length>20?toy.name.slice(0,20) :toy.name}</td>
                                <td>{toy.category}</td>
                                <td>{toy.price}$</td>
                                <td>{toy.quantity}</td>
                                <td>
                                    <Link to={`/all_toys/${toy._id}`}><button className="btn btn-accent">View Details</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                

                </div>
            </div>

        </div>
    );
};

export default AllToys;