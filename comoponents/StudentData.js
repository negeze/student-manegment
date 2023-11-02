import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../materail/Logo-300x180.png'
import { FaSyncAlt, FaRegCalendarCheck, FaUser } from 'react-icons/fa'
import { FaReadme, FaPenSquare, FaMedal } from 'react-icons/fa'
import backgroundImage from '../materail/Dark.jpeg'
function StudentData() {
  let Logout = useNavigate()
  return (
    <div className=" fixed h-full">
    <div className="fixed top-0 left-0 h-full pt-20  " 
    style={{ backgroundImage: `url(${backgroundImage})` }}>
    
        <img className='h-20 sm:h-32' src={Logo} />
        <div className="flex-col text-gray-200 sm:text-xl pt-10 sm:pl-10 pr-11">
          <div className="">
            <Link to='/StudentINfo'>
              <p className=' underline  sm:text-2xl flex justify-normal'>
                <FaUser className='h-8 w-8' />
                <span className='pl-3'>Student info</span>
              </p>
            </Link><br />
          </div>
          <Link to='/Mycourse'>
            <p className=' underline  sm:text-2xl flex justify-normal'>
              <FaReadme className='h-8 w-8' />
              <span className='pl-3'>My Courses</span>
            </p>
          </Link><br />
          <div className=''>
            <Link to='/Attendance'>
              <p className='underline sm:text-2xl flex justify-normal'>
                <FaPenSquare className='h-8 w-8' />
                <span className='pl-3'>Attendance</span>
              </p>

            </Link><br />
          </div>
          <Link to='/WaitList'>
            <p className=' underline sm:text-2xl flex justify-normal'>
              <FaSyncAlt className='h-8 w-8' />
              <span className='pl-3'>Wait List</span>
            </p>
          </Link><br />

          <div className=''>
            <Link to='/Schedule'>

              <p className='underline sm:text-2xl flex justify-normal'>
                <FaRegCalendarCheck className='h-8 w-8' />
                <span className='pl-3'>Schedule</span>
              </p>
            </Link>
          </div>
          <div className='pt-5'>
            <Link to='/Certificate'>
              <p className='underline sm:text-2xl flex justify-normal'>
                <FaMedal className='h-8 w-8' />
                <span className='pl-3'>My Certificate</span>
              </p>
            </Link>
          </div>
        </div>
       
      </div>
</div>
    
  )
}

export default StudentData