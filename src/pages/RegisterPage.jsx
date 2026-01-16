import React from 'react';
import { Link } from 'react-router';

const RegisterPage = () => {
  return (
     <div className='flex justify-center min-h-screen items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className='font-semibold text-2xl text-center'>Register Your account</h2>
            <div className="card-body">
              <fieldset className="fieldset">
                     {/* name field */}
                 <label className="label font-semibold">Your Name</label>
                <input type="text" className="input" placeholder="Enter Your name" />

                {/* photo field */}
                <label className="label font-semibold">Photo URL</label>
                <input type="text" className="input" placeholder="Enter Your Photo URL" />


                {/* emial field */}
                <label className="label font-semibold">Email</label>
                <input type="email" className="input" placeholder="Email" />

                {/* password field */}
                <label className="label font-semibold">Password</label>
                <input type="password" className="input" placeholder="Password" />
               
                
                <button className="btn btn-neutral mt-4">Register</button>
                <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link to='/auth/login' className='text-secondary hover:underline'>Login</Link> </p>
              </fieldset>
            </div>
          </div>
      </div>
  );
};

export default RegisterPage;