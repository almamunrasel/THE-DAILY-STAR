import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className='font-bold mb-5'> Find Us On</h2>
      <div className=''>
        <div className="join join-vertical w-full space-y-3">
          <button className="btn bg-base-100 justify-start p-2 hover:bg-base-200     join-item"> <FaFacebook></FaFacebook> Facebook</button>
          <button className="btn bg-base-100 justify-start p-2 hover:bg-base-200 join-item"> <FaTwitter></FaTwitter> Twitter</button>
          <button className="btn bg-base-100 justify-start p-2 hover:bg-base-200 join-item"> <FaInstagram></FaInstagram> Instagram</button>
        </div>
      </div>
      
    </div>
  );
};

export default FindUs;