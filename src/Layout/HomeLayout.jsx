import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftASide from '../Components/HomeLayout/LeftASide';
import RightASide from '../Components/HomeLayout/RightASide';

const HomeLayout = () => {
  return (
    <div>
      <header> 
        <Header></Header>
        <section className='w-11/12 mx-auto my-3'>
          <LatestNews></LatestNews>
        </section>
        <nav className='w-11/12 mx-auto my-3'>
          <Navbar></Navbar>
        </nav>
        
      </header>
      <main className='w-11/12 mx-auto my-3  grid grid-cols-12 '>
        <aside className='col-span-3'>
          <LeftASide></LeftASide>
        </aside>
        <section className='main col-span-6'>
          <Outlet></Outlet>
        </section>
        <aside className='col-span-3'>
          <RightASide></RightASide>
        </aside>
      </main>
      
    </div>
  );
};

export default HomeLayout;