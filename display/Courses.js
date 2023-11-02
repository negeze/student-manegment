import React, { useState } from 'react'
import Course from '../../materail/course.PNG'
import machine from '../../materail/MACHINE.png'
import Developer from '../../materail/developers.jpg'
import Ai from '../../materail/AI.PNG'
import { useNavigate } from 'react-router-dom'
import Footer from '../../comoponents/Footer'
import Menus from '../../comoponents/Menus'
import Learnmor from '../../comoponents/Learnmor'
import course from '../../comoponents/course.json'
function Courses({onSearch}) {
  const [query, setQuery] = useState('');
  const login = useNavigate();
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSearch = () => {
    onSearch(query);
  };
  return (
    <div>
    <Menus/>

      <div className="bg-cover bg-center h-900"
        style={{ backgroundImage: `url(${Course})` }}>
        <div className='text-white pl-20 '>
          <h1 className='text-2xl sm:text-4xl pb-16 pt-28'>
            The Ultimate Technology Courses
          </h1>
          <p className='pb-16 text-xl'>Learn how to <span className='text-green-500'> start , build</span> and
            <span className='text-green-500'>  run</span> technology. </p>
          <input type="text" name='search' 
          value={query} 
          onChange={handleQueryChange}

            className=" text-black px-4 py-2 w-1/2 h-12  border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="What kind of course are looking for ?  " />
          <button 
          className=" w-24 h-12   bg-blue-950 text-stone-200 text-center  text-xl font-thin border-none"
          onClick={handleSearch}>
            Search  </button>
          <div className='pb-28 '>

            
          </div>
        </div>
      </div>


      <div className='bg-white'>
        <h1 className='text-2x sm:text-5xl flex justify-center p-14 text-blue-900'>Featured Courses</h1>
        <div className='flex-col sm:flex-row flex justify-evenly p-8 sm:p-11 pl-28 sm:pl-0  '>

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


          <div className='bg-slate-300 w-80 h-96 rounded-2xl '>
            <img className='w-80 h-44 rounded-2xl' src={Ai} />
            <div className='pl-7'>
              <h3 className='text-3xl pb-8'>Artificial Intellegence  </h3>
              <p className='text-2xl '>6 months /full time </p>
              <div className=' items-center py-11 '>
                <span className='pr-11'>
                  <button onClick={() => { login("/Login") }} className="rounded w-36 border-spacing-3 border border-gray-900 text-gray-900  text-2xl font-normal border-2">
                    learn more </button>
                </span>
                <button className="rounded w-24 border-spacing-3 border bg-gray-900 text-stone-400 text-center  text-2xl font-normal border-2">
                  Enroll  </button>
              </div>
            </div>
          </div>

        </div>

        <div className='flex-col sm:flex-row flex justify-evenly p-8 sm:p-11 pl-28 sm:pl-0 '>

          <div className=' bg-slate-300 w-80 h-96 rounded-2xl before mb-8 sm:mb-0'>
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


        <div className='flex-col sm:flex-row flex justify-evenly p-8 sm:p-11 pl-28 sm:pl-0 '>

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
      <Footer/>
    </div>
  )
}

export default Courses