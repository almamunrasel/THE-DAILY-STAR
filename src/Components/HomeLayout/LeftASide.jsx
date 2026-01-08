import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftASide = () => {
  return (
    <div>
       <Suspense fallback={<span className='loading loading-dots loading-xl'>loading</span>}>

       </Suspense>
      <Categories></Categories>
      
    </div>
  );
};

export default LeftASide;