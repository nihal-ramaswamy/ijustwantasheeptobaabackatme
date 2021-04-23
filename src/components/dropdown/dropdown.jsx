import React from 'react';
import {useSelector} from 'react-redux';

const Dropdown = () => {
    const toggleState = useSelector(state => state.toggleStateReducer);

  return (
    <div
      className={
        toggleState
          ? 'grid grid-rows-5 text-center items-center bg-yellow-500'
          : 'hidden'
      }
    >
      <button className='p-4'>
        Dropdown menu coz why not?
      </button>
      <button className='p-4'>
        These buttons dont
      </button>
      <button  className='p-4'>
        do anything.
      </button>
      <button className='p-4'>
        But i wanted to show
      </button>
      <button className='p-4'>
        that I did work.
      </button>
    </div>
  );
};

export default Dropdown;
