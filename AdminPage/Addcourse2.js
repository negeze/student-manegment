import React from 'react'
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
import Adminmenu from '../../comoponents/Adminmenu'
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Menu from '../../comoponents/Menu'
function Addcourse2() {
const [coursePrerequisites,setcoursePrerequisites]=useState('');
const[description,setdescription]=useState('');
const[learn,setlearn]=useState('');
const[materials,setmaterials] = useState('');
const [error ,seterrors] = useState(false);
const finsh =useNavigate('');

const handleSubmitchange =(e)=>{
  e.preventDefault();
  if(coursePrerequisites.length === 0 && description.length === 0)
  {
seterrors(true);
return;
  }
if(learn.length === 0 && materials.length ===0)
{
  seterrors(true);
  return;
}
finsh('/')
};
  
  return (
    <div>
      <div className="bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${Abstract})` }}

      >
<Menu/>
        <Adminmenu />
        <div className='pt-32 sm:pr-20 text-white pl-44 sm:pl-72 '>
          <p className=' py-2 pl-4 rounded sm:text-2xl text-xl sm:font-bold  bg-blue-950 flex justify-normal'>
            <FaPlus className='h-8 w-8' />
            <span className='pl-11 '> Add Courses</span>
          </p>
        </div>
        <form className='' 
        onSubmit={handleSubmitchange}
        >
          <div className=' flex justify-normal flex-col sm:flex-row'>

            <div className='pl-64 sm:pl-80 text-blue-950'>
              <div className=''>
                <h3 className=" pt-8  sm:text-2xl sm:font-fontawesome">
                  Course Prerequisites
                </h3>
              </div>
              <textarea

               onChange={e=>setcoursePrerequisites(e.target.value)}
                className="h-52 w-96 p-4 border border-gray-300 sm:rounded-xl resize-none"
              ></textarea>

              {error && coursePrerequisites <= 0 ?<p className="text-red-500">Course Prerequisites is required </p>:""}

              <div className='pt-8 '>
                <h3 className=" sm:text-2xl sm:font-fontawesome">
                  Description
                </h3>
              </div>
              <textarea
              onChange={e=>setdescription(e.target.value)}
                className="h-60 w-96 p-4 border border-gray-300 sm:rounded-xl resize-none"
              ></textarea>
              {error && description <= 0 ?<p className="text-red-500">Course description  is required </p>:""}
            </div>


            <div className='pl-64 sm:pl-20 text-blue-950 pb-8'>
              <div className=''>
                <h3 className=" pt-8  sm:text-2xl sm:font-fontawesome">
                  What you'll learn
                </h3>
              </div>
              <textarea
              onChange={e=>setlearn(e.target.value)}
                className="h-52 w-96 p-4 border border-gray-300 sm:rounded-xl resize-none"
              ></textarea>
                {error && learn <= 0 ?<p className="text-red-500">Course learn is required </p>:""}

              <div className='pt-8  p'>
                <h3 className=" sm:text-2xl sm:font-fontawesome">
                  Materials
                </h3>
              </div>
              <textarea
              onChange={e=> setmaterials(e.target.value)}
                className="h-60 w-96 p-4 border border-gray-300 sm:rounded-xl resize-none"
              ></textarea>
              {error && materials <= 0 ?<p className="text-red-500">Course material is required </p>:""}
            </div>



          </div>
          < div className='flex justify-end py-10 px-11'>
         <button className='py-1 px-6 bg-blue-950 text-gray-300 rounded'>Edit </button>
         </div>
        </form>
      </div>

    </div>
  )
}

export default Addcourse2