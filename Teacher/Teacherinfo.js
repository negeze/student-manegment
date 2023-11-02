import React from 'react'
import profile from '../../materail/Samplepro.PNG'
import { FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import TeachersMenu from '../../comoponents/TeachersMenu'
import Menu from '../../comoponents/Menu'
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
function Teacherinfo() {
  const Edit = useNavigate()
  return (
    <div>
      <div className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
      <TeachersMenu />
      <Menu />
      <div className='pt-24 sm:pr-20 pl-44 sm:pl-80 '>
        <p className='text-slate-400 py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal'>
          <FaUser className='h-8 w-8' />

          <span className='pl-11'>Teacher Information  </span>
        </p>
      </div>
      <div className='flex justify-normal sm:pr-20 pl-96 pt-5 '>


      </div>
      <div className='flex-col sm:flex-row flex justify-normal pt-8 sm:pt-20 sm:pr20 pl-44 sm:pl-80'>

        <div className='flex justify-normal '>
          <img className='  rounded-2xl ' src={profile} />
          <div className='pl-4 sm:pl-8 pr-28 '>

          <p className='text-gray-700 sm:text-xl font-medium '>First Name:<span className='font-semibold px-4'>First Name</span></p>
              <p className='text-gray-700 sm:text-xl font-medium '>Middle Name:<span className='font-semibold px-4'>Middle Name</span></p>
              <p className='text-gray-700 sm:text-xl font-medium '>last Name:<span className='font-semibold px-4'>Last Name</span></p>
              <p className='text-gray-700 sm:text-xl font-medium '>email:<span className='font-semibold px-4'>email@gmail.com</span></p>
              <p className='text-gray-700 sm:text-xl font-medium '>Date of birth:<span className='font-semibold px-4'>05/082002</span></p>
            </div>
        </div>
        <div className="pl-4 sm:pl-0">

          <p className='text-gray-700 sm:text-xl font-medium '>phone:<span className='font-semibold px-4'>0912345678</span></p>
            <p className='text-gray-700 sm:text-xl font-medium '>Gender:<span className='font-semibold px-4'>male</span></p>
            <p className='text-gray-700 sm:text-xl font-medium '>Address:<span className='font-semibold px-4'>A.A</span></p></div>
      </div>
      <div className='flex justify-end  sm:py-32 py-4 pr-20'>
        <button className='bg-blue-950 px-5 text-white rounded' onClick={() => Edit('/Teacheredit')}>Edit</button>
      </div>
</div>
    </div>
  )
}

export default Teacherinfo