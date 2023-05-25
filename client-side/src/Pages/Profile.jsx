import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../CustomHooks/useTitle';

const Profile = () => {
    const { user, loading,updateUserProfile } = useContext(AuthContext)
    console.log(user)
    const [name, setName] = useState(user.displayName);
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        updateUserProfile(name,photo)
        .then(()=>{
            Swal.fire('Updated!', '', 'success')
            setName(name)
            setPhotoURL(photo)
        })
        .catch(error=>console.log(error))

    };
    useTitle('PlayfulRides | Profile')
    if (loading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className='container mx-auto'>
                <div className='md:flex items-center gap-5  bg-white  p-6'>
                    <div className='w-full lg:w-2/4 '>
                        <img src={user.photoURL} alt="Profile Picture" className="w-20 h-20 rounded-full" />
                        <h2 className='font-bold text-cs-secondary'>{name}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-cs-secondary text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full border border-gray-400 text-gray-600 p-2 rounded focus:outline-none focus:border-indigo-500"
                                    defaultValue={name}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="photoURL" className="block text-cs-secondary text-sm font-bold mb-2">
                                    Photo URL
                                </label>
                                <input
                                    type="text"
                                    name="photoURL"
                                    className="w-full border border-gray-400 p-2 text-gray-600 rounded focus:outline-none focus:border-indigo-500"
                                    defaultValue={photoURL}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#AD7A7D] text-white py-2 px-4 rounded-full focus:outline-none hover:bg-gray-500"
                            >
                                Update
                            </button>
                        </form>


                    </div>
                    <div className='bg-cs-light mt-2 lg:mt-0 w-full lg:w-2/4'>
                        <div className=" p-4 rounded-lg">
                            <h3 className="text-3xl text-cs-secondary font-semibold mb-2">Welcome, {name}!</h3>
                            <p className="text-cs-secondary">Start selling your products by adding a new listing:</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg mt-4 shadow">
                            <h4 className="text-lg text-gray-800 mb-2">Add New Product</h4>
                            <Link to="/add_toy"><button className="bg-[#AD7A7D] text-white py-2 px-4 rounded-full">Add Product</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

};

export default Profile;