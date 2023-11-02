import React from 'react'
import Menus from '../../comoponents/Menus'
import Admin from '../../comoponents/Adminmenu'
import Profile from '../../materail/Samplepro.PNG'
import {FaUser} from'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
import Menu from '../../comoponents/Menu'
function AdminInfo() {
  const Edit= useNavigate();
  //const set= await axios.get('api/admininfo/${Admin-id}');
  return (
    <div>
       <div className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
      
      <Admin />
      <Menu/>
      <div className='pt-32 sm:pr-20 text-slate-300 pl-44 sm:pl-72 '>
      <p className=' py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal'>
      <FaUser className='h-8 w-8'/>
            
         <span className='pl-11 font-semibold'>Personal Information</span> 
        </p>
      
        <div className='flex justify-normal sm:pt-16  flex-col sm:flex-row'>
            <img className='  rounded-2xl ' src={Profile} />
            <div className='pl-4 sm:pl-8 pr-28  '>
             
            <p className='text-gray-700 sm:text-xl font-medium '>First Name:<span className='font-semibold px-4'>First Name</span></p>
              <p className='text-gray-700 sm:text-xl font-medium '>Middle Name:<span className='font-semibold px-4'>Middle Name</span></p>
              <p className='text-gray-700 sm:text-xl font-medium '>last Name:<span className='font-semibold px-4'>Last Name</span></p>
              <p className='text-gray-700 sm:text-xl font-medium '>email:<span className='font-semibold px-4'>email@gmail.com</span></p>
              <p className='text-gray-700 sm:text-xl font-medium '>Date of birth:<span className='font-semibold px-4'>05/082002</span></p>
            </div>
          
          <div className="pl-4 sm:pl-0">
           
            <p className='text-gray-700 sm:text-xl font-medium '>phone:<span className='font-semibold px-4'>0912345678</span></p>
            <p className='text-gray-700 sm:text-xl font-medium '>Gender:<span className='font-semibold px-4'>male</span></p>
            <p className='text-gray-700 sm:text-xl font-medium '>Address:<span className='font-semibold px-4'>A.A</span></p>
          </div>
          </div>
      </div>
      <div className='flex justify-end pb-6 sm:pt-32 pr-20 '>
        <button className='bg-blue-950 px-5 text-white rounded' onClick={()=>Edit('/Adminedit')}>Edit</button>
      </div>
    </div>
    </div>
  )
}

export default AdminInfo