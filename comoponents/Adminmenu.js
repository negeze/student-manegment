import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Menus from './Menus'
import logo from '../materail/Logo-300x180.png'
import { FaGraduationCap, FaLaptopCode, FaReadme, FaAngleDown, FaPlus, FaReceipt,  FaChartPie,  } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
import { useState } from 'react'
import backgroundImage from '../materail/Dark.jpeg'
function Adminmenu() {
 // const Logout = useNavigate()
  const [showlist,setshowlist] = useState("hidden")
  const [showlists,setshowlists] = useState("hidden")
  const [showinstract,setshowinstract] = useState("hidden")
  return (
    <div>
      <div className='flex justify-normal'>
       
        <div className=" ">

        <div className="fixed top-0 left-0 h-full pt-10  " 
        style={{ backgroundImage: `url(${backgroundImage})` }}>
          <img className='h-10 sm:h-20' src={logo} />
          <div className="flex-col text-gray-200 sm:text-xl pt-20 sm:pl-10 pr-11">
            <div className="">
              <Link to ='/Dashboard'>
                <p className="underline sm:text-2xl flex justify-normal">
                  <FaChartPie className='h-8 w-8 text-red-300'/>
                  <span >Dashboard
                    </span>
                  </p>
              </Link> <br/>
              <Link to='/AdminInfo'>
              <p className=' underline  sm:text-2xl flex justify-normal'>
                  <FaUser className='h-8 w-8' />
                  <span className='pl-3'>AdminInfo
                  
                  </span>
                </p>
                </Link><br />
            </div>
            <Link to='/CoursesList'>
            <p className=' underline  sm:text-2xl flex justify-normal'>
                  <FaReadme className='h-8 w-8' />
                  <span className='pl-3 pr-3'>
                    Courses</span>
                    <FaAngleDown className='h-9'
                    
                    onClick={() => {
                      if (showlist=="hidden") {
                         
                      setshowlist('')
                      }
                      else {
                        setshowlist('hidden')
          
                      }
                     
                    }}
                    />
                    <br />
                   
                </p>
                {/* <p className={` ${showlist} flex justify-normal text-sm`}>
                <FaTable className='h-5 '/>
                  <span>see All Courses</span>
                  </p> */}
              <Link to="/Addcourse" > <p className={`${showlist} flex justify-normal text-sm`}>
                  <FaPlus className='h-5'/>
                  <span>add courses</span></p></Link>
            </Link><br />
            <div className=' '>
              <Link to='/Instructor'>
              <p className=' underline  sm:text-2xl flex justify-normal '>
                  <FaLaptopCode className='h-8 w-8' />
                  <span className='pl-3 pr-3'>Instructor</span>
                  <FaAngleDown className='h-9'
                    
                    onClick={() => {
                      if (showlists=="hidden") {
                         
                      setshowlists('')
                      }
                      else {
                        setshowlists('hidden')
          
                      }
                     
                    }}
                    />
                </p>
                </Link>
                {/* <p className={` ${showlists} flex justify-normal text-sm`}>
                <FaTable className='h-5 '/>
                  <span>see All Instructor</span></p> */}
             <Link to ="/Addinstractor">   <p className={`${showlists} flex justify-normal text-sm`}>
                <FaPlus className='h-5 '/>
                 <span>add Instructor</span></p> <br/></Link>
            </div>
            <Link to='/Students'>
            <p className=' underline  sm:text-2xl flex justify-normal'>
                  <FaGraduationCap className='h-8 w-8' />
                  <span className='pl-3'>Students</span>
                </p><br/>
              </Link>
            <div className=''>
              <Link to='/Reception'>
              <p className=' underline  sm:text-2xl flex justify-normal'>
                  <FaReceipt className='h-8 w-8' />
                  <span className='pl-3 pr-3'>Reception</span>
                  <FaAngleDown className='h-9'
                 onClick={()=>{
                  if (showinstract=='hidden') {
                    setshowinstract('')
                  }
                  else {
                    setshowinstract('hidden')
                  }
                 }
                }
                  />
                </p>

                {/* <Link to ="/"> <p className={`${showinstract} flex justify-normal text-sm`}> 
                  <FaTable className='h-5'/>
                  <span> Manage Receptions </span>
                  
                  </p></Link> */}
                <Link to ="/Addreception"><p className={`${showinstract} flex justify-normal text-sm`}> 
                <FaPlus className='h-5'/>
                <span>Add Reception</span>
                
                </p></Link>
                </Link>
            </div>
          </div>

        </div>
</div>
      </div>
    </div>
  )
}

export default Adminmenu