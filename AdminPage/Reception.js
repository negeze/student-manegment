import React from 'react'
import Menus from '../../comoponents/Menus'
import Admin from '../../comoponents/Adminmenu'
import { FaCartArrowDown } from 'react-icons/fa'
import Profile from '../../materail/Samplepro.PNG'
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
import Menu from '../../comoponents/Menu'
function Reception() {
  return (
    <div>
      <div className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <Admin />
        <Menu/>
        <div className='pt-32 sm:pr-20 text-slate-300 pl-44 sm:pl-72 '>
          <p className=' py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal'>
            <FaCartArrowDown className='h-8 w-8' />

            <span className='pl-11 font-semibold'> Manege Reception</span>
          </p>
        </div>
        <div className='flex-col sm:flex-row flex justify-normal pt-8 sm:pt-20 sm:pr20 pl-44 sm:pl-80'>
          <div className='bg-grayish-156 flex justify-normal flex-col sm:flex-row sm:rounded-xl'>
            <div className='flex justify-normal pl-4 pt-6 '>
              <div className='pb-6'>
                <img className='  rounded-2xl  h-36 w-36' src={Profile} />
              </div>
              <div className='pl-4 sm:pl-8 sm:pr-28 '>
              <p className='text-blue-950 font-light   '>Full Name: <span className='pl-3 font-normal'> Bereket Sahle demeke</span></p>
              <p className='text-blue-950 font-light   '>Date of birth: <span className='pl-3 font-normal'> 29/3/2002</span></p>
              <p className='text-blue-950 font-light '>email: <span className='pl-3 font-normal'>   email@gmail.com </span></p>
              <p className='text-blue-950 font-light  '>Phone: <span className='pl-3 font-normal'> 0911223344 </span></p>


              </div>
            </div>
            <div className="pl-4 sm:pl-0 pt-4 pb-4">
            <p className='text-blue-950 font-light  '>Gender: <span className='pl-3 font-normal'>male</span></p>
            <p className='text-blue-950 font-light  '>Address: <span className='pl-3 font-normal'>Addis Ababa</span></p>
            <p className='text-blue-950 font-light  '>Admission  Date  <span className='pl-3 font-normal'>27/2/2023</span></p>
            <p className='text-blue-950 font-light'> Salary :<span className='pl-3 font-normal'> 6000 </span> <span className='text-red-500 pl-48 pr-12 font-normal'>Delete</span></p>
            </div>
          </div>
        </div>
        <div className='flex-col sm:flex-row flex justify-normal py-8 sm:pr20 pl-44 sm:pl-80'>
          <div className='bg-grayish-156 flex justify-normal flex-col sm:flex-row sm:rounded-xl'>
            <div className='flex justify-normal pl-4 pt-6 '>
              <div className='pb-6'>
                <img className='  rounded-2xl  h-36 w-36' src={Profile} />
              </div>
              <div className='pl-4 sm:pl-8 sm:pr-28 '>
              <p className='text-blue-950 font-light   '>Full Name: <span className='pl-3 font-normal'> Bereket Sahle demeke</span></p>
              <p className='text-blue-950 font-light  '>Date of birth: <span className='pl-3 font-normal'> 29/3/2002</span></p>
              <p className='text-blue-950 font-light '>email: <span className='pl-3 font-normal'>  email@gmail.com </span></p>
              <p className='text-blue-950 font-light  '>Phone: <span className='pl-3 font-normal'> 0911223344 </span></p>


              </div>
            </div>
            <div className="pl-4 sm:pl-0 pt-4 pb-4">
            <p className='text-blue-950 font-light  '>Gender: <span className='pl-3 font-normal'>male</span></p>
            <p className='text-blue-950 font-light   '>Address: <span className='pl-3 font-normal'>Addis Ababa</span></p>
              <p className='text-blue-950 font-light  '>Admission  Date  <span className='pl-3 font-normal'>27/2/2023</span></p>
              <p className='text-blue-950 font-light'> Salary :<span className='pl-3 font-normal'> 6000 </span> <span className='text-red-500 pl-48 pr-12 font-normal'>Delete</span></p>
            </div>
          </div>
        </div>

        <div className='flex justify-end py-12  px-10'>
          <button className='bg-blue-950 px-5 py-1 text-white rounded font-semibold'>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default Reception