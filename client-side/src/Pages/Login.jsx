import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import useTitle from '../CustomHooks/useTitle';
const Login = () => {
    const {userLogin,googleSignIn} = useContext(AuthContext);
    const [err,setErr] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/profile";
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email,password)
        .then(result=>{
            const loggedUser = result.user;
            if(loggedUser){
                navigate(from,{replace:true})
            }else{
                setErr('Something went wrong')
            }
            
        })
        .catch(error=>setErr(error))
    }
    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result=>{
            navigate(from,{replace:true})
        })
        .catch(error=>console.log(error))
    }
    //custom title hook
    useTitle(`Login`)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-[#AD7A7D]">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md">
        <h2 className="text-2xl font-bold mb-8">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-bold">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-bold">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 bg-[#AD7A7D] text-white rounded-md hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center justify-center mt-6">
          <span className="text-sm text-gray-600">Or sign in with</span>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="ml-2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
          >
           <FcGoogle></FcGoogle>
          </button>
          <Link
            to="/register"
            className="ml-2 text-blue-500 hover:underline transition duration-200"
          >
            Create an account
          </Link>

          {
            err && <p className='text-red-600'>{err}</p>
            }
        </div>
      </div>
    </div>
  );
};

export default Login;
