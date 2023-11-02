import React from 'react'
import { FaUser } from 'react-icons/fa'
import TeachersMenu from '../../comoponents/TeachersMenu'
import Menu from '../../comoponents/Menu'
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
function Attendances() {
  return (
    <div>
      <div className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <TeachersMenu />
        <Menu />
        <div className='pt-24 sm:pr-20 pl-44 sm:pl-80 '>
          <p className='text-slate-400 py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal'>
            <FaUser className='h-8 w-8' />
            <span className='pl-11'> Submit Attendances</span>
          </p>
        </div>
        <div className=' flex justify-evenly pl-36 sm:pl-52 text-blue-950 sm:text-2xl font-mono py-8'>
          <div className=''>
            <h3 className=''>
              Student Name
            </h3>
          </div>
          <div className='px-6'>
            <h3 className=''>Email</h3>
          </div>
          <div className=''>
            <h3 className=''>Attendance </h3>
          </div>
        </div>
        <div className=' sm:pr-20 pl-44 sm:pl-80'>
          <div className='pb-8  sm:text-2xl font-serif'>
            <p className='bg-grayish-156 py-5 sm:rounded pl-2 '>
              <span className='pr-4'>1.</span> Bereket Fanse
              <span className=' px-4 sm:px-20'>Bereketfanose@gmail.com </span>
            </p>
          </div>
          <div className='pb-8  sm:text-2xl font-serif'>
            <p className='bg-grayish-156 py-5 sm:rounded pl-2 '>
              <span className='pr-4'>2.</span> Bereket Fanse
              <span className=' px-4 sm:px-20'>Bereketfanose@gmail.com </span><span className = ''>Present</span>
            </p>
          </div>
          <div className='pb-8  sm:text-2xl font-serif'>
            <p className='bg-grayish-156 py-5 sm:rounded pl-2 '>
              <span className='pr-4'>3.</span> Bereket Fanse
              <span className=' px-4 sm:px-20'>Bereketfanose@gmail.com </span>

            </p>
          </div>
        </div>

        < div className='flex justify-end py-10 px-11'>
        <button className='py-1 px-6 bg-blue-950 text-gray-300 rounded font-bold'>Submit </button>
      </div>
      </div>
    </div>
  )
}

export default Attendances