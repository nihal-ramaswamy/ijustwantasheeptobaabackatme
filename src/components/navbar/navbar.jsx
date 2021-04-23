import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {openToggle, closeToggle} from '../../actions';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const toggleState = useSelector(state => state.toggleStateReducer);
    const dispatch = useDispatch();
    const toggle = () => {
        if (toggleState === 1) {
            dispatch(closeToggle());
        }
        else {
            dispatch(openToggle());
        }
    }
  return (
    <nav
      className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono'
      role='navigation'
    >
    <div className='px-4 cursor-pointer ' onClick={toggle}>
        <svg
          className='w-8 h-8'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <h1 className='font-black text-4xl'>
        NotMerino
      </h1>
      <div className='pr-8 md:block  hidden'>
        <Link to='/' className='p-4'>
          Home
        </Link>
        <Link to='/about' className='p-4'>
          About
        </Link>
        <Link to='/sheepGoBaa' className='p-4'>
          SheepGoBaa
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
