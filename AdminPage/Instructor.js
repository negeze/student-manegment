import React, { useState } from 'react'
import Menus from '../../comoponents/Menus'
import Admin from '../../comoponents/Adminmenu'
import { FaLaptopCode } from 'react-icons/fa'
import Profile from '../../materail/Samplepro.PNG'
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
import Menu from '../../comoponents/Menu'
function Instructor({ onSreach }) {
  const [query, setquery] = useState('');
  const handleQueryChange = (e) => {
    setquery(e.target.value);
  }
  const handleSearch = (e) => {
    onSreach(query);
  };
  return (
    <div>
      <div className="bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${Abstract})` }}

      >
      
      <Admin />
      <Menu/>
      <div className='pt-32 sm:pr-20 text-slate-300 pl-44 sm:pl-72 '>
        <p className=' py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal'>
          <FaLaptopCode className='h-8 w-8' />
          <span className='pl-11 font-semibold'>Instructor</span>
        </p>
      </div>
      <div className='pl-48 pt-4 sm:pl-96'>
        <input
          type="text"
          name='search'
          value={query}
          onChange={handleQueryChange}

          className=" text-black px-4  w-1/2 h-12  border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Search anyone from here. " />
        <button
          className=" w-24 h-12   bg-blue-950 text-stone-200 text-center  text-xl font-thin border-none"
          onClick={handleSearch}
        >
          Search  </button>
      </div>

      <div className='flex-col sm:flex-row flex justify-normal pt-8 sm:pr20 pl-44 sm:pl-80'>
        <div className='bg-grayish-156 flex justify-normal flex-col sm:flex-row sm:rounded-xl'>
          <div className='flex justify-normal pl-4 pt-4 '>
            <div className='py-8'>
              <img className='  rounded-2xl  sm:h-36 sm:w-36' src={Profile} />
            </div>
            <div className='pl-4 sm:pl-8 sm:pr-28 '>
              <p className='text-blue-950 font-light  '>Full Name: <span className='pl-3 font-normal'> Bereket Sahle demeke</span></p>
              <p className='text-blue-950  font-light '>Date of birth: <span className='pl-3 font-normal'> 29/3/2002</span></p>
              <p className='text-blue-950 font-light'>email: <span className='pl-3 font-normal'>   email@gmail.com </span></p>
              <p className='text-blue-950 font-light  '>Phone: <span className='pl-3 font-normal'> 0911223344 </span></p>
              <p className='text-blue-950  font-light '>Education level : <span className='pl-3 font-normal'> Masters degree </span></p>
              <p className='text-blue-950 font-light  '>Salary : <span className='pl-3 font-normal'> 9000 </span></p>
            </div>
          </div>
          <div className="pl-4 sm:pl-0 pt-4 ">
            <p className='text-blue-950  font-light'>Gender: <span className='pl-3 font-normal'>male</span></p>
            <p className='text-blue-950   font-light'>Address: <span className='pl-3 font-normal'>Addis Ababa</span></p>
            <p className='text-blue-950  font-light'>Admission  Date  <span className='pl-3 font-normal'>27/2/2023</span></p>
            <p className='text-blue-950  font-light '>Experience : Date  <span className='pl-3 font-normal'>27/2/2023</span></p>
            <p className='text-blue-500  font-normal'> course taken  <span className='text-red-500 pl-48 pr-12 font-normal'>Delete</span></p>
          </div>
        </div>
      </div>
      <div className='flex-col sm:flex-row flex justify-normal pt-8 sm:pr20 pl-44 sm:pl-80'>
        <div className='bg-grayish-156 flex justify-normal flex-col sm:flex-row sm:rounded-xl'>
          <div className='flex justify-normal pl-4 pt-4 '>
            <div className='py-8'>
              <img className='  rounded-2xl  sm:h-36 sm:w-36' src={Profile} />
            </div>
            <div className='pl-4 sm:pl-8 sm:pr-28 '>
              <p className='text-blue-950  font-light '>Full Name: <span className='pl-3 font-normal'> Bereket Sahle demeke</span></p>
              <p className='text-blue-950   font-light'>Date of birth: <span className='pl-3 font-normal'> 29/3/2002</span></p>
              <p className='text-blue-950  font-light'>email: <span className='pl-3 font-normal'>   email@gmail.com </span></p>
              <p className='text-blue-950  font-light  '>Phone: <span className='pl-3 font-normal'> 0911223344 </span></p>
              <p className='text-blue-950  font-light '>Education level : <span className='pl-3 font-normal'> Masters degree </span></p>
              <p className='text-blue-950  font-light '>Salary : <span className='pl-3 font-normal'> 9000 </span></p>
            </div>
          </div>
          <div className="pl-4 sm:pl-0 pt-4">
            <p className='text-blue-950 font-light '>Gender: <span className='pl-3 font-normal'>male</span></p>
            <p className='text-blue-950  font-light '>Address: <span className='pl-3 font-normal'>Addis Ababa</span></p>
            <p className='text-blue-950 font-light '>Admission  Date  <span className='pl-3 font-normal'>27/2/2023</span></p>
            <p className='text-blue-950 font-light '>Experience : Date  <span className='pl-3 font-normal'>27/2/2023</span></p>
            <p className='text-blue-500 font-normal'> course taken  <span className='text-red-500 pl-48 pr-12 font-normal'>Delete</span></p>
          </div>

        </div>



      </div>
      < div className='flex justify-end py-10 px-11'>
        <button className='py-1 px-6 bg-blue-950 text-gray-300 rounded'>Edit </button>
      </div>
    </div>
    </div>
  )
}

export default Instructor