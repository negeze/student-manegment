import React from 'react'
import Menus from '../../comoponents/Menus'
import Admin from '../../comoponents/Adminmenu'
import { FaReadme } from 'react-icons/fa'
import Webdevelop from '../../materail/developers.jpg'
import Machine from '../../materail/MACHINE.png'
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
import Menu from '../../comoponents/Menu'
function CoursesList() {
  return (
    <div>
       <div className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>

      <Admin />
      <Menu/>
      <div className='pt-32 sm:pr-20 text-slate-300 pl-44 sm:pl-72 '>
        <p className=' py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal '>
          <FaReadme className='h-8 w-8' />

          <span className='pl-11 font-semibold'>Courses</span>
        </p>
      </div>


      <div className='flex justify-evenly pl-48 sm:pl-52 pt-8 pb-6 text-blue-950 sm:text-2xl '>
        <div className=''>
          <button  className='font-bold'>All Courses </button>
        </div>

        <div className=''>
          <button className=''>Open Courses</button>
        </div>

        <div className=''>
          <button className=''>Closed Courses</button>
        </div>

      </div>
      <div className=' flex justify-normal pl-44 sm:pl-80 text-blue-950 sm:text-xl sm:font-bold'>
        <div className='pl-4'>
          <h3 className=''>
            Course Name
          </h3>
        </div>
        <div className='px-32'>
          <h3 className=''>Enrollment type</h3>
        </div>
        <div className=''>
          <h3 className=''>Status</h3>
        </div>
      </div>
      <div className='sm:pr-24 pl-48 sm:pl-72 '>
        <div class="border-t-2 border-grayish-156 pb-8 "></div>
      </div>
      <div className='pl-48 sm:pl-72 sm:pr-32'>
        <div className='pb-6'>
          <p className='bg-grayish-156 py-2 pl-2 sm:rounded-l-lg rounded-tr-lg  sm:text-xl font-light '>
             <span className='sm:pr-6'>  1.</span> Web Development  <span className='px-3 sm:px-28'>Summer</span  ><span className='px-3 sm:px-16'> Close </span>
            <button className='bg-blue-950 text-white  rounded px-2'>See Students
            </button></p>
          <div className='sm:pl-16'>
            <div className='bg-grayish-156 flex justify-normal sm:rounded-b-lg flex-col sm:flex-row'>
              <div className='pl-6 py-4'>
                <img className='sm:h-24  w-20 sm:w-32' src={Webdevelop} />
              </div>
              <div className='pr-20 py-4 px-5 sm:text-xl sm:font-light  '>
                <p className=''>Instructor Name :<span className='pl-3'>Instructor Name </span></p>
                <p className=''>Class start Date : <span>19/08/2023</span></p>
                <p className=''>Class end Date :<span>19/11/2023</span></p>
              </div>
              <div className='pl-8 py-4 sm:text-xl sm:font-light '>
                <p className=''>Course Fee :<span>800</span></p>
                <p className='pb-3'>Registered  :<span>15/20</span></p>
                <button className='bg-blue-950 text-gray-400 rounded py-1 px-2'>About Course</button>
              </div>
            </div>
          </div>
        </div>
        <div className='pb-10'>
          <p className='bg-grayish-156 pl-2 py-2 sm:rounded-l-lg rounded-tr-lg sm:text-xl font-light'> <span className='sm:pr-6'>  2.</span> Machine Learning  <span className='px-3 sm:px-28'>Regular</span > <span className='px-3 sm:px-16'> Close </span>
            <button className='bg-blue-950 text-white rounded  px-2'>See Students
            </button></p>
          <div className='sm:pl-16'>
            <div className='bg-grayish-156 flex justify-normal  sm:rounded-b-lg flex-col sm:flex-row '>
              <div className='pl-6 py-4'>
                <img className='sm:h-24 w-20 sm:w-32' src={Machine} />
              </div>
              <div className='pr-20 py-4 px-5 sm:text-xl sm:font-light'>
                <p className=''>Instructor Name :<span className='pl-3'>Instructor Name </span></p>
                <p className=''>Class start Date : <span>19/08/2023</span></p>
                <p className=''>Class end Date :<span>19/11/2023</span></p>
              </div>
              <div className='pl-8 py-4 sm:text-xl sm:font-light '>
                <p className=''>Course Fee :<span>800</span></p>
                <p className='pb-3'>Registered  :<span>15/20</span></p>
                <button className='bg-blue-950 text-gray-400 py-1 px-2 rounded'>About Course</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CoursesList