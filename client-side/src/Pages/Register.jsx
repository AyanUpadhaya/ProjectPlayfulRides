import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import useTitle from '../CustomHooks/useTitle';
import Swal from 'sweetalert2';

const Registration = () => {
    const {createNewUser,updateUserProfile} = useContext(AuthContext);
    const [err,setErr] = useState(''); 
    const navigate = useNavigate()
    const handleRegistration =(event)=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;
        if(password.length < 6){
            setErr("Password must be at least 6 characters");
            return
        }
        if(email === '' || password ===''){
            setErr ('Can not submit empty email or password');
            return
        }

        createNewUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            updateUserProfile(name,photo)
            .then(()=>{
              Swal.fire('Registered!', '', 'success')
              navigate('/profile')
            })
            .catch(error=>setErr(error.message))
            
        })
        .then(error=>{
            console.log(error)
            setErr(error.message);
        })
    }
    useTitle(`Registration`)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-[#AD7A7D]">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-8">Registration</h2>
        <form onSubmit={handleRegistration}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-bold">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name" required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-bold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email" required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-bold">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password" required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoURL" className="block mb-2 text-sm font-bold">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter the URL of your photo" required
            />
          </div>
          <div>
            Alread have an account? <Link
            to="/login"
            className="ml-2 text-blue-500 hover:underline transition duration-200"
          >
            Login
          </Link>
          </div>
       
          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 bg-[#AD7A7D] text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
                {
                    err && <p className='text-red-600'>{err}</p>
                }
        </form>
      </div>
    </div>
  );
};

export default Registration;
