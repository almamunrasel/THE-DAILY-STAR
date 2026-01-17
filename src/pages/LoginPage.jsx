import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate,  } from 'react-router';
import AuthContext from '../provider/AuthContext';

const LoginPage = () => {

  const [error,setError]=useState('');
  const navigate= useNavigate();
  const {signIn}= useContext(AuthContext);
  const location= useLocation();
  const handleLogin=(e)=>{

    e.preventDefault();

    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      navigate(`${location.state? location.state:"/"}`);
     

    })
    .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    // alert(errorCode,errorMessage);
    setError(errorMessage);
  });


  }

  return (
      <div className='flex justify-center min-h-screen items-center'>

         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className='font-semibold text-2xl text-center'>Login Your account</h2>
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name='email' className="input" placeholder="Email" required/>
                <label className="label">Password</label>
                <input type="password" name='password' className="input" placeholder="Password" required />
                <div><a className="link link-hover">Forgot password?</a></div>

                {
                  error && <p className='text-red-500'>{error}</p>
                }
               
                <button type='submit'  className="btn btn-neutral mt-4">Login</button>
                <p className='font-semibold text-center pt-5'>Dont’t Have An Account ? <Link to='/auth/register' className='text-secondary hover:underline'>Register</Link> </p>
              </fieldset>
            </form>
          </div>
      </div>
  );
};

export default LoginPage;