import React from 'react'
import { FaPlus } from 'react-icons/fa'
import Admin from '../../comoponents/Adminmenu'
import { useState } from 'react';
import axios from 'axios';
import FileInputComponent from '../../comoponents/FileInputComponent';
import profile from '../../materail/Samplepro.PNG'
import Reception from './Reception';
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
import Menu from '../../comoponents/Menu';
function Addreception() {
  const [Sex, setSex] = useState('');
  const [errors, setErrors] = useState([]);
  const [firstName, setfirstName] = useState('');
  const [middleName, setmiddleName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phone, setphone] = useState('');
  const [email, setemail] = useState('');
  const [address, setaddress] = useState('');
  const [educationlevel, seteducationlevel] = useState('');
  const [salary, setSalary] = useState('');
  const [Experience, setExperience] = useState('');
  const [error, seterror] = useState(false);
  const regexp = /^\d{10}$/;
  const regexps = /^\d+(\.\d{1,2})?$/;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [selectedFile, setSelectedFile] = useState(null);

  const [isValid, setIsValid] = useState(true);


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


  const handleSalaryChange = (event) => {
    const inputSalary = event.target.value;
    const parsedSalary = parseInt(inputSalary);

    if (parsedSalary >= 300 && parsedSalary <= 50000) {
      setIsValid(true);
      setSalary(inputSalary);
    } else {
      setIsValid(false);
      setSalary('');
    }
  };


  const handleSexChange = (event) => {
    setSex(event.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName.length === 0 && lastName.length === 0) {
      seterror(true);
      return;
    }
    if (middleName.length === 0 && address.length === 0) {
      seterror(true);
      return;
    }
    if (educationlevel.length === 0) {
      seterror(true);
      return;
    }
    if (!regexp.test(phone)) {
      seterror(true);
      return;
    }
    if (!regex.test(email)) {
      seterror(true);
      return;
    }

    const minSalary = 300;
    const maxSalary = 50000;

    if (isNaN(salary) || salary < minSalary || salary > maxSalary) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    const years = 0;
    if (Experience <= years) {
      seterror(true);
      return;
    }



    // Validate the sex field
    const validationErrors = validateSex();

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {

      setErrors([]);

    }
  };

  const validateSex = () => {
    const errors = [];

    if (Sex === '') {
      errors.push('Please select a sex.');
    }

    return errors;


  }
  return (
    <div>
 <div className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
      <Admin />
      <Menu/>
      <div className='pt-32 sm:pr-20 text-slate-300 pl-44 sm:pl-72 '>
        <p className=' py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal'>
          <FaPlus className='h-8 w-8' />
          <span className='pl-11 font-bold'> Add Reception</span>
        </p>
      </div>
      <div className='pl-44 sm:pl-72'>
        <form onSubmit={handleSubmit}
          className='form-horizontal'>


          <div className='flex justify-normal flex-col sm:flex-row pl-36 pt-16'>
            <div classNam=''>
            <label className='sm:text-xl font-semibold  text-gray-700 '>First Name</label><br />
            <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                type='text'
                name='FirstName'
              
                onChange={e => setfirstName(e.target.value)}
              /><br />
               {error && firstName.length <= 0 ? <p className='text-red-500'>first name is required</p> : ""}
            </div>

           
            <div className='sm:pl-44'>
            <label className='sm:text-xl font-semibold  text-gray-700 '>Middle Name</label> <br />
            <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                type='text'
                name='MiddleName'
               
                onChange={e => setmiddleName(e.target.value)} /><br />
              {error && middleName.length <= 0 ? <p className='text-red-500'>middle name is required</p> : ""}
            </div>

          </div>

          <div className='form-group flex justify-normal pl-36 flex-col sm:flex-row '>
            <div className='pb-0'>
            <label className='sm:text-xl font-semibold  text-gray-700 '>Last Name</label><br />
            <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                type='text'
                name='LastName'
                
                onChange={e => setlastName(e.target.value)} /><br />

              {error && lastName.length <= 0 ? <p className='text-red-500'>last name is required</p> : ""}

              <div className='py-4'>
              <label className='sm:text-xl font-semibold  text-gray-700 '>Email</label><br />
              <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  type='email'
                  name='email'
                 
                  onChange={e => setemail(e.target.value)}
                /><br />
                {error && (!regex.test(email)) ?
                  <p className='text-red-500'> it is not email format  </p> : ""}
              </div>

              <label className='sm:text-xl font-semibold  text-gray-700 '>Phone Number</label><br />
              <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                type='numeric'
                name='PhoneNumber'
               
                onChange={e => setphone(e.target.value)} />
              <br />
              {error && (!regexp.test(phone)) ?
                <p className='text-red-500'> it is not correct  </p>
                : ""}
              <div className='sm:py-4 py-2'>
              <label className='sm:text-xl font-semibold  text-gray-700 '>Date of birth </label> <br />
              <input className=" px-10 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  type='date'
                /><br />
              </div>
              <form >

                {/* <img className='  rounded-2xl ' src={profile} >
            </img><br /> */}
                <FileInputComponent className='pb-4' onFileSelect={handleFileSelect} />
                <button
                  className='sm:text-xl font-semibold'
                  onClick={handleFileUpload}>Upload your photo</button>


              </form>
            </div>
            <div className='sm:pl-32 py-4'>

            <label className='sm:text-xl font-semibold  text-gray-700 py-4'>Sex</label><br/>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500"
                  value="male"
                  checked={Sex === 'male'}
                  onChange={handleSexChange}
                />
                <span className="ml-2">Male</span>
              </label>


              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500"
                  value="female"
                  checked={Sex === 'female'}
                  onChange={handleSexChange}
                />
                <span className="ml-2">Female</span>
              </label>


              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500"
                  value="other"
                  checked={Sex === 'other'}
                  onChange={handleSexChange}
                />
                <span className="ml-2">Other</span>
              </label>

              {errors.map((error, index) => (
                <p key={index} className="text-red-500 mt-2">
                  {error}
                </p>
              ))}
              <br />

              <div className='py-4'>
              <label className='sm:text-xl font-semibold  text-gray-700 '>Address :</label><br />
              <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                  type="text"
                  name='Address'
                 
                  onChange={e => setaddress(e.target.value)} /><br />
                {error && address.length <= 0 ?
                  <p className='text-red-500'>Address is required</p> : ""}
              </div>
              <label className='sm:text-xl font-semibold  text-gray-700 '>Education level</label> <br />
              <input className=" pr-8 py-2  border border-gray-300 focus:border-indigo-500 focus:outline-none"
                type='text'
                name='EducationLevel'
              
                onChange={e => seteducationlevel(e.target.value)} />
              <br />
              {error && educationlevel.length <= 0 ?
                <p className='text-red-500'>educational level is required</p>
                : ""}


              <div className='sm:py-4'>
              <label className='sm:text-xl font-semibold  text-gray-700 '>Salary </label><br />
                <input
                  type="number"
                  value={salary}
                  onChange={handleSalaryChange}
                  className={`border ${isValid ? 'border-green-500' : 'border-red-500'} p-2 mb-2`}
                 
                  min="300"
                  max="50000"
                />
                {!isValid && (
                  <p className="text-red-500">Salary must be between 300 and 50000</p>
                )}
                <br />
              </div>
              <div className='sm:pb-4'>
              <label className='sm:text-xl font-semibold  text-gray-700 '>Experience</label><br />
              <input  className={`border ${isValid ? 'border-green-500' : 'border-red-500'} p-2 mb-2`}
                  type='number'
                  min="0"
                  name='Experience'
                  
                  onChange={e => setExperience(e.target.value)} /><br />
                {error && Experience <= 0 ? <p className="text-red-500">place enter your work experience </p> : ""}
              </div>
              <div className='pl-32 py-4'>
                <button className='py-1 px-4 bg-blue-950 text-gray-300 rounded'>Submit</button>
              </div>
            </div>
          </div>
        </form>

      </div>
    </div>
    </div>
  )
}

export default Addreception