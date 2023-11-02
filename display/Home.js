import React from 'react'
import image from '../../materail/Home2.PNG'
import Developer from '../../materail/developers.jpg'
import certificate from '../../materail/Untitled.jpg'
import machine from '../../materail/MACHINE.png'
import Ai from '../../materail/AI.PNG'
import Abdinak from '../../materail/Abdinak.PNG'
import Tgabu from '../../materail/Tgabu.PNG'
import Footer from '../../comoponents/Footer'
import Menus from '../../comoponents/Menus'
import { FaPenNib, FaBusinessTime, FaRegLightbulb, FaCommentsDollar, FaDollyFlatbed, FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
function Home() {
  
  const Course = useNavigate()
  return (
    <div>
      <Menus />
      <div className="bg-cover bg-center h-900"
        style={{ backgroundImage: `url(${image})` }}>
        <div className="py-28">
          <h1 className=' flex justify-center text-slate-300 text-2xl sm:text-5xl font-semibold'>
            Shape your career with relevant   </h1>
          <h1 className='flex justify-center text-slate-300 text-2xl sm:text-5xl font-semibold'>scourses on OMISHTU-<span className='text-green-500'>J</span>OY.
          </h1>
          <div className='flex justify-center items-center py-11'>
            <button className=" flex justify-normal border-spacing-3 border border-stone-400 text-stone-400 py-2 px-4 rounded-full sm:text-3xl font-thin border-2">
              GET STARTED <span className=' font-thin pt-1 pl-1'><FaArrowRight className=''/></span> </button>
          </div>
        </div>
      </div>
      <div className=' bg-white ' >
        <div className=' text-blue-900'>
          <h1 className='flex justify-center text-2xl sm:text-5xl py-6 font-semibold'>Our Top Categories</h1>
        </div>
        <div className=' pl-28 sm:pl-0 sm:flex justify-center text-black  text-blue-900'>
          <div className='bg-stone-300 h-52 w-52 rounded-2xl m-14'>
            <div className='flex flex-col items-center rotate-180 pt-6 text-gray-700'>
              <FaPenNib className='h-28 w-20 transform -rotate-45 ' />
            </div>
            <hi className=' pl-5 text-xl font-semibold pt-8'> Design</hi>
            <p className='pl-5'>View More</p>
          </div>
          <div className='bg-stone-300 h-52 w-52 rounded-2xl m-14'>
            <div className='text-gray-500 flex justify-center pt-8 pb-6'>
              <FaRegLightbulb className=' h-20 w-20' />
            </div>
            <h1 className=' pl-5 text-xl font-semibold'>Development</h1>
            <p className='pl-5'>View More</p>
          </div>
          <div className='bg-stone-300 h-52 w-52 rounded-2xl sm:mt-14 ml-14'>
            <div className='flex justify-center pb-8 pt-8'>
              <FaCommentsDollar className='h-20 w-20'/>
            </div>
            <h1 className=' pl-4 text-xl font-semibold'>Business</h1>
            <p className='pl-4'>View More</p>
          </div>
        </div>
      </div>
      <div className='bg-white '>
        <h1 className='text-2xl sm:text-6xl flex justify-center py-8  text-blue-900'>Popular courses for everyone </h1>
        <div className='flex-col sm:flex-row flex justify-evenly p-4 pl-28 sm:pl-0 sm:p-11 '>

          <div className=' bg-slate-300 w-80 h-96 rounded-2xl mb-8 sm:mb-0'>
            <img className="w-80 h-44 rounded-2xl" src={Developer} />
            <div className='pl-6'>
              <h3 className='text-3xl pb-8'>Web Development</h3>
              <p className='text-2xl'>6 months /full time </p>
              <div className=' items-center py-11 '>
                <span className='pr-11'>
                  <button className="rounded w-36 border-spacing-3 border border-gray-900 text-gray-900  text-2xl font-normal border-2">
                    learn more </button>
                </span>
                <button className="rounded w-24 border-spacing-3 border bg-gray-900 text-stone-400 text-center  text-2xl font-normal border-2">
                  Enroll  </button>
              </div>
            </div>
          </div>


          <div className='bg-slate-300 w-80 h-96 rounded-2xl mb-8 sm:mb-0'>
            <img className="w-80 h-44 rounded-2xl" src={machine} />
            <div className='pl-6'>
              <h3 className='text-3xl pb-8'>Machine Learning</h3>
              <p className='text-2xl '>6 months /full time </p>
              <div className=' items-center py-11 '>
                <span className='pr-11'>
                  <button className="rounded w-36 border-spacing-3 border border-gray-900 text-gray-900  text-2xl font-normal border-2">
                    learn more </button>
                </span>
                <button className="rounded w-24 border-spacing-3 border bg-gray-900 text-stone-400 text-center  text-2xl font-normal border-2">
                  Enroll  </button>
              </div>
            </div>
          </div>


          <div className='bg-slate-300 w-80 h-96 rounded-2xl'>
            <img className='w-80 h-44 rounded-2xl' src={Ai} />
            <div className='pl-7'>
              <h3 className='text-3xl pb-8'>Artificial Intellegence  </h3>
              <p className='text-2xl '>6 months /full time </p>
              <div className=' items-center py-11 '>
                <span className='pr-11'>
                  <button className="rounded w-36 border-spacing-3 border border-gray-900 text-gray-900  text-2xl font-normal border-2">
                    learn more </button>
                </span>
                <button className="rounded w-24 border-spacing-3 border bg-gray-900 text-stone-400 text-center  text-2xl font-normal border-2">
                  Enroll  </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-cover sm:bg-cover  bg-center sm:bg-center w-full sm:w-full h-900"
        style={{ backgroundImage: `url(${certificate})` }}>

        <h1 className=' text-white text-2xl sm:text-5xl p-20'>Verified Certificate</h1>
        <p className='text-stone-300 pl-20'>Earn recognized certificate upon completion </p>

        <div className='flex justify-center items-center py-11 pb-24'>
          <button className="flex justify-normal border-spacing-3 border border-stone-400 text-stone-400 py-2 px-4 rounded-full text-3xl font-thin border-2">
            Lean More<span className=' font-thin pt-1 pl-1'> <FaArrowRight className=''/></span></button>
        </div>
      </div>


      <div className='bg-white '>
        <h1 className='text-2xl sm:text-4xl flex justify-center text-blue-900 pt-14'>
          Testimonies
        </h1>
        <div className='p-11'>
          <div className='text-black bg-stone-300 rounded-2xl mb-14 flex-col sm:flex-row flex justify-evenly' >
            <img className='' src={Abdinak} />
            <p className='p-14'>"Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit.
              <br />Vestibulum sagittis nisi ac enim fringilla,
              <br />nec suscipit arcu pharetra."<br />
              <span className='text-cyan-400 text-xl'>John Doe</span>
              <br />CEO, Company X</p>
          </div>
          <div className='text-black bg-stone-300 rounded-2xl mb-14 flex-col sm:flex-row flex justify-evenly' >

            <p className='p-14'>"Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit.
              <br />Vestibulum sagittis nisi ac enim fringilla,
              <br />nec suscipit arcu pharetra."<br />
              <span className='text-cyan-400 text-xl'>John Doe</span>
              <br />CEO, Company X</p>
            <img className='' src={Tgabu} />
          </div>
        </div>
      </div>

      <div className='bg-blue-950 text-gray-300' >
        <h1 className='text-3xl sm:text-5xl flex justify-center pt-14'>Impact In Number</h1>
        <div className='flex justify-evenly p-11 sm:text-2xl'>
          <p className=''>25+ <br />Courses
          </p>
          <p className=''>200+<br />Learners
          </p>
          <p className=''> 5+<br />Partners</p>
        </div>
        <p className='pl-16 sm:text-2xl '>Choose from more than 25+ courses to get the skills you need to transform your life
          <br />and achieve your goals.
        </p>
        <div className='flex justify-center items-center py-11'>
          <button onClick={() => Course('/Courses')} className="border-spacing-3 border  text-gray-300  text-gray-300
            py-2 px-4 rounded-full text-xl font-thin border-2 flex justify-normal">
              Explore Courses<span className=' font-thin pt-1 pl-1'><FaArrowRight/></span></button>
        </div>
      </div>
  
      <Footer />

    </div >
  )
}

export default Home