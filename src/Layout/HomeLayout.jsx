import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftASide from '../Components/HomeLayout/LeftASide';
import RightASide from '../Components/HomeLayout/RightASide';

const HomeLayout = () => {
  return (
    <div className='mt-10'>
      <header > 
        <Header></Header>
        <section className='w-11/12 mx-auto my-3'>
          <LatestNews></LatestNews>
        </section>
        <nav className='w-11/12 mx-auto my-3'>
          <Navbar></Navbar>
        </nav>
        
      </header>
      <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-5 '>
        <aside className='col-span-3 sticky top-0 h-fit '>
          <LeftASide></LeftASide>
        </aside>
        <section className='main col-span-6'>
          <Outlet></Outlet>
        </section>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <RightASide></RightASide>
        </aside>
      </main>
      
    </div>
  );
};

export default HomeLayout;