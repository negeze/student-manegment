

import React from 'react';
import { Link } from 'react-router-dom';
import Menus from './Menus';
import logo from '../materail/Logo-300x180.png';
import { FaGraduationCap, FaLaptopCode, FaReadme, FaCartArrowDown, FaAngleDown, FaPlus, FaTable, FaReceipt } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import backgroundImage from '../materail/Dark.jpeg';

function Sample() {
  const [showlist, setshowlist] = useState("hidden");
  const [showlists, setshowlists] = useState("hidden");
  const [showinstract, setshowinstract] = useState("hidden");

  return (
    <div>
      
       

      <div className="bg-cover bg-center h-900"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
            <img className='h-20 sm:h-32' src={logo} alt="Logo" />
            <div className="flex-col text-gray-200 sm:text-xl pt-20 sm:pl-10 pr-11">
              <div>
                <Link to='/AdminInfo'>
                  <p className='underline sm:text-2xl flex justify-normal'>
                    <FaUser className='h-8 w-8' />
                    <span className='pl-3'>AdminInfo</span>
                  </p>
                </Link>
                <br />
              </div>
              <Link to='/CoursesList'>
                <p className='underline sm:text-2xl flex justify-normal'>
                  <FaReadme className='h-8 w-8' />
                  <span className='pl-3 pr-3'>Courses</span>
                  <FaAngleDown className='h-9' onClick={() => setshowlist(prevState => prevState === "hidden" ? "" : "hidden")} />
                  <br />
                </p>
                <Link to="/Addcourse">
                  <p className={`${showlist} flex justify-normal text-sm`}>
                    <FaPlus className='h-5' />
                    <span>add courses</span>
                  </p>
                </Link>
              </Link>
              <br />
              <div>
                <Link to='/Instructor'>
                  <p className='underline sm:text-2xl flex justify-normal'>
                    <FaLaptopCode className='h-8 w-8' />
                    <span className='pl-3 pr-3'>Instructor</span>
                    <FaAngleDown className='h-9' onClick={() => setshowlists(prevState => prevState === "hidden" ? "" : "hidden")} />
                  </p>
                </Link>
                <Link to="/Addinstractor">
                  <p className={`${showlists} flex justify-normal text-sm`}>
                    <FaPlus className='h-5' />
                    <span>add Instructor</span>
                  </p>
                  <br />
                </Link>
              </div>
              <Link to='/Students'>
                <p className='underline sm:text-2xl flex justify-normal'>
                  <FaGraduationCap className='h-8 w-8' />
                  <span className='pl-3'>Students</span>
                </p>
                <br />
              </Link>
              <div>
                <Link to='/Reception'>
                  <p className='underline sm:text-2xl flex justify-normal'>
                    <FaReceipt className='h-8 w-8' />
                    <span className='pl-3 pr-3'>Reception</span>
                    <FaAngleDown className='h-9' onClick={() => setshowinstract(prevState => prevState === "hidden" ? "" : "hidden")} />
                  </p>
                  <Link to="/Addreception">
                    <p className={`${showinstract} flex justify-normal text-sm`}>
                      <FaPlus className='h-5' />
                      <span>Add Reception</span>
                    </p>
                  </Link>
                </Link>
              </div>
            </div>
          </div>
        </div>
    
    
  );
}

export default Sample;

   
