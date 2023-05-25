import React, { useContext, useState } from 'react';
import logo from './../assets/logo/logo_transparent.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import './../CustomCSS/CustomCss.css'

const Navigation = () => {
    const {user,logOut} = useContext(AuthContext);
    const [isHovered,setIsHovered] = useState(false);
    const navigate = useNavigate();
    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      const handleLogOut =()=>{
        logOut()
        .then(()=>{
            navigate('/login')
        })
        .catch(err=>console.log(err))
      }


    
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-dark">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/all_toys">All Toys</Link></li>
                    {user?<li><Link to={`/mytoys`}>My Toys</Link></li>:''}
                    {user?<li><Link to="/add_toy">Add a Toy</Link></li>:''}
                    <li><Link to="/blogs">Blogs</Link></li>
                    {user&&<li><Link to="/profile">Profile</Link></li>}
                    {user?<li><button onClick={handleLogOut} className="bg-[#AD7A7D] text-white py-2 px-4 rounded-full focus:outline-none hover:bg-gray-500">Logout</button></li>:<li><Link to="/login">Login</Link></li>}

                    </ul>
                </div>

                <div className='flex items-center'>
                    <Link to="/" >
                        <img src={logo} alt="" className='w-20' />
                    </Link>
                    <div className='text-[#E87121] text-4xl'>PlayfulRides</div>
                </div>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold text-cs-secondary">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/all_toys">All Toys</Link></li>
                    {user?<li><Link to={`/mytoys`}>My Toys</Link></li>:''}
                    {user?<li><Link to="/add_toy">Add a Toy</Link></li>:''}
                    <li><Link to="/blogs">Blogs</Link></li>
                    {user&&<li><Link to="/profile">Profile</Link></li>}
                    {user&&<li><button onClick={handleLogOut} className="bg-[#AD7A7D] text-white py-2 px-4 rounded-full focus:outline-none hover:bg-gray-500">Logout</button></li>}

                </ul>
            </div>
            <div className="navbar-end " >
            {isHovered &&<div className="username mr-5">{user.displayName}</div>}  
                {
                    user?
                    <div className="w-16 flex flex-reverse cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <img src={user.photoURL} className='w-16 h-16 rounded-full border-5' />
                                        
                    </div>:
                    <Link to="/login">
                        <button className="bg-[#AD7A7D] text-white py-2 px-4 rounded-full focus:outline-none hover:bg-gray-500">Login</button>
                    </Link>
                }
                
            </div>
        </div>
    );
};

export default Navigation;