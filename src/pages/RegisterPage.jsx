import React, { useContext } from 'react';
import { Link } from 'react-router';
import AuthContext from '../provider/AuthContext';

const RegisterPage = () => {
  const {createUser,setUser}= useContext(AuthContext);
  const handleRegister=(e)=>{
    e.preventDefault();
    
    const form = e.target;

    const name =e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name,photo,email,password,form);
    createUser(email,password)
    .then((result=>{

      const user = result.user;
      setUser(user);

    }))
    .catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage,errorCode);

    })

    

  }
  return (
     <div className='flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className='font-semibold text-2xl text-center'>Register Your account</h2>
            <form onSubmit={handleRegister} className="card-body">
              <fieldset className="fieldset">
                     {/* name field */}
                 <label className="label font-semibold">Your Name</label>
                <input type="text" name='name' className="input" placeholder="Enter Your name" required />

                {/* photo field */}
                <label className="label font-semibold">Photo URL</label>
                <input type="text" name='photo' className="input" placeholder="Enter Your Photo URL" required />


                {/* emial field */}
                <label className="label font-semibold">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" required />

                {/* password field */}
                <label className="label font-semibold">Password</label>
                <input type="password" name='password' className="input" placeholder="Password"  required/>
               
                
                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link to='/auth/login' className='text-secondary hover:underline'>Login</Link> </p>
              </fieldset>
            </form>
          </div>
      </div>
  );
};

export default RegisterPage;