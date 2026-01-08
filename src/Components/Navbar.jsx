import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className=''></div>
      <div className='flex gap-5 text-accent '>
        <NavLink to='/' className='hover:text-primary'>Home</NavLink>
        <NavLink to='/about' className='hover:text-primary'> About</NavLink>
        <NavLink to='/career' className='hover:text-primary'> Career</NavLink>

      </div>
      <div className='flex items-center gap-2 mr-5'>
        <img src={user} alt="" />
        <button className='btn btn-primary px-7'>Login</button>
      </div>
    </div>
  );
};

export default Navbar;