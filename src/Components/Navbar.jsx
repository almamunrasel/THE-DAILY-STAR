import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import AuthContext from '../provider/AuthContext';

const Navbar = () => {

  const {user,logOut}=useContext(AuthContext);

  const handleLogOut=()=>{

  logOut()
  .then(()=>{
    alert("you logged out successfully")
  })
  .catch((error)=>{
      console.log(error);
  })

  }


  return (
    <div className='flex justify-between items-center'>
      <div className=''>{user && user.email}</div>
      <div className='flex gap-5 text-accent '>
        <NavLink to='/' className='hover:text-primary'>Home</NavLink>
        <NavLink to='/about' className='hover:text-primary'> About</NavLink>
        <NavLink to='/career' className='hover:text-primary'> Career</NavLink>

      </div>
      <div className='flex items-center gap-2 mr-5'>
        <img src={userIcon} alt="" />
        {
          user? (<button onClick={handleLogOut} className='btn btn-primary px-7'>Log Out</button>) : (<Link to='/auth/login' className='btn btn-primary px-7'>Login</Link>)
        }
        
      </div>
    </div>
  );
};

export default Navbar;