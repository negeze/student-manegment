import React from 'react'
import Admin from '../../comoponents/Adminmenu'
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react';
import axios from 'axios';
import FileInputComponent from '../../comoponents/FileInputComponent';
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
import { useNavigate } from 'react-router-dom';
import { faCalendarAlt, faAnglesDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Menu from '../../comoponents/Menu';
function Addcourse() {
  const [showlist, setshowlist] = useState("hidden")
  const Next = useNavigate()
  const [courses, setcourses] = useState('');
  const [category, setcategory] = useState('');
  const [courseCode, setcourseCode] = useState('');
  const [enrollmentType, setenrollmentType] = useState('');
  const [email, setemail] = useState('');
  const [fee, setfee] = useState('');
  const [capacity, setCapacity] = useState('');
  const [error, seterror] = useState(false);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };



  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      await axios.post('/api/upload-profile-image');

    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (courses.length === 0 && courseCode.length === 0) {
      seterror(true);
      return;
    }
    if (category.length === 0 && fee.length === 0) {
      seterror(true);
      return;
    }
    if (enrollmentType.length === 0) {
      seterror(true);
      return;
    }

    if (!regex.test(email)) {
      seterror(true);
      return;
    }


    const years = 0;
    if (capacity <= years) {
      seterror(true);
      return;
    }

    Next('/Addcourse2');


  };


  return (
    <div>
      <div className="bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <Admin />
        <Menu />
        <div className='pt-32 sm:pr-20 text-slate-300 pl-44 sm:pl-72 '>
          <p className=' py-2 pl-4 rounded sm:text-2xl text-xl sm:font-bold  bg-blue-950 flex justify-normal'>
            <FaPlus className='h-8 w-8' />
            <span className='pl-11 font-semibold '> Add Courses</span>
          </p>
        </div>

        <div className='pl-44 sm:pl-72'>
          <form onSubmit={handleSubmit}
            className='form-horizontal'>




            <div className='form-group flex justify-normal pl-36 flex-col sm:flex-row sm:pt-16 pt-6'>

              <div className='sm:pt-2'>
                <div classNam=''>
                  <label className=' sm:text-xl font-semibold  text-gray-700'>Course Name</label><br />
                  <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                    type='text'
                    name='courseName'

                    onChange={e => setcourses(e.target.value)}
                  /><br />
                  {error && courses.length <= 0 ? <p className='text-red-500'>course  is required</p> : ""}
                </div>

                <label className='sm:text-xl font-semibold  text-gray-700 '>course code </label><br />
                <div className="relative">
                  <input
                    type='text'
                    name='courseCode'

                    onChange={e => setcourseCode(e.target.value)}
                    className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"

                      

                  />
                  <FontAwesomeIcon
                    icon={faAnglesDown}
                    className="sm:absolute top-3 sm:right-16  absolute right-24   text-gray-500"

                    onClick={() => {
                      if (showlist == "hidden") {

                        setshowlist('')
                      }
                      else {
                        setshowlist('hidden')

                      }

                    }}

                  />
                  <Link to="/Addcourse" > <p className={`${showlist} flex justify-normal text-sm`}>
                    <FaPlus className='h-5' />
                    <span>add courses</span></p></Link>
                </div>
                <br />
                {error && courseCode.length <= 0 ? <p className='text-red-500'>course code  is required</p> : ""}




               

                <div className='sm:py-2'>
                  <label className='sm:text-xl font-semibold  text-gray-700 '>Category</label> <br />
                  <div className="relative">
                    <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                      type='text'
                      name='category'

                      onChange={e => setcategory(e.target.value)} />
                    <FontAwesomeIcon
                      icon={faAnglesDown}
                      className="sm:absolute top-3 sm:right-16  absolute right-24   text-gray-500"
                    />
                  </div>


                  <br />
                  {error && category.length <= 0 ? <p className='text-red-500'>course category  is required </p> : ""}
                </div>

                <div className='pb-2'>
                  <label className='sm:text-xl font-semibold  text-gray-700'>Enrollment type </label> <br />
                  <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                    type='text'
                    name='enrollmentType'

                    onChange={e => setenrollmentType(e.target.value)} /><br />
                  {error && enrollmentType.length <= 0 ? <p className='text-red-500'>enrollment type  is required </p> : ""}
                </div>

                <FileInputComponent className='' onFileSelect={handleFileSelect} />
                <button
                  className='sm:text-xl font-semibold'
                  onClick={handleFileUpload}>Upload your photo</button>

              </div>
              <div className='sm:pl-40'>

                <div className='sm:py-2'>
                  <label className='sm:text-xl font-semibold  text-gray-700 '>Capacity</label><br />
                  <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                    type='text'
                    min="0"
                    name='capacity'

                    onChange={e => setCapacity(e.target.value)} /><br />
                  {error && capacity <= 0 ? <p className="text-red-500">place enter capacity  </p> : ""}
                </div>

                <div className='sm:py-2'>
                  <label className='sm:text-xl font-semibold '>Fee :</label><br />
                  <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                    type="text"
                    name='Address'

                    onChange={e => setfee(e.target.value)} /><br />
                  {error && fee.length <= 0 ?
                    <p className='text-red-500'>Fee is required</p> : ""}
                </div>





                <label htmlFor="startDate" className="sm:text-xl font-semibold  text-gray-700">Class Start Date</label>
                <div className="relative">
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    className=" px-10 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"

                  />
                  
                </div>



                <label htmlFor="endDate" className="sm:text-xl font-semibold  text-gray-700">class End Date</label>
                <div className="relative">
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    className=" px-10 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"

                  />
                  
                </div>


                <div className='sm:py-2'>
                  <label className='sm:text-xl font-semibold  text-gray-700 '>Instructor Email</label><br />
                  <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                    type='email'
                    name='email'

                    onChange={e => setemail(e.target.value)}
                  /><br />
                  {error && (!regex.test(email)) ?
                    <p className='text-red-500'> it is not email format  </p> : ""}
                </div>
                <div className='pl-32 py-4'>
                  <button className='py-1 px-4 bg-blue-950 text-gray-300 rounded'>Next </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>


  )
}

export default Addcourse