import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
//import await from 'await'
//import axios from 'axios'
function Signup() {

  const Next = useNavigate();
  const [firstName, setfirstName] = useState('');
  const [middleName, setmiddleName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState();
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [address, setaddress] = useState('');
  const [Phone, setphone] = useState();
  const [errors, seterrors] = useState(false);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexp = /^\d{10}$/;

  const handleChange =async (e) => {
    e.preventDefault();
    if (firstName.length === 0 || lastName.length === 0) {
      seterrors(true);
      return;
    }
    if (middleName.length === 0 || address.length === 0) {
      seterrors(true);
      return;
    }

    if (password.length < 8) {
      seterrors(true);
      return;
    }

    if (password !== confirmPassword) {
      seterrors(true);
      return;
    }
    if (!regex.test(email)) {
      seterrors(true);
      return;
    }
    if (!regexp.test(Phone)) {
      seterrors(true);
      return;
    }
    //const set =await axios.post('path/api/Signup', )
    Next('/Family');
  }

  
  
  return (
    <div className="h-screen ">
      <form className='' onSubmit={handleChange}>
        <div className='flex justify-normal pb-0 h-screen '>
          <div className='pt-16 bg-gray-300 w-1/2 h-screen '>
            <h1 className='text-2xl sm:text-6xl font-bold flex justify-end text-blue-950'>
              sign
            </h1>
            <div className='sm:pl-16 pl-4 pt-10'>

              <div className=''>
                <div className='flex-col sm:flex-row flex justify-normal '>
                  <div className='pb-4 pr-32'>
                    <label className=''>
                      First Name
                    </label><br />
                    <input
                      className='rounded h-10'
                      type='text'
                      name='firstName'
                      onChange={e => setfirstName(e.target.value)} />
                    {errors && firstName.length <= 0 ? 
                    <p className='text-red-500'>first name is required</p>
                    : ""}
                  </div>
                  <div className='pb-4'>
                    <label className=''>Middle Name</label><br />
                    <input className='rounded h-10'
                      type='text'
                      name='middleName'
                      onChange={e => setmiddleName(e.target.value)} />
                    {errors && middleName.length <= 0 ? 
                    <p className='text-red-500'>middle name is required</p> 
                    : ""}
                  </div>
                </div>
                <div className='pb-4'>
                  <label className=''>Last Name</label><br />
                  <input className='rounded h-10'
                    type='text' name='lastName'
                    onChange={e => setlastName(e.target.value)} />
                  {errors && lastName.length <= 0 ?
                   <p className='text-red-500'>last name is required</p>
                   : ""}
                </div>
                <div className='pb-4'>
                  <label className=''>Email</label><br />
                  <input className='rounded h-10 sm:w-64'
                    type='email' name='email'
                    onChange={e => setemail(e.target.value)} />
                  {errors && !regex.test(email) ? 
                  <p className='text-red-500'>it is not email format</p> 
                  : ""}
                </div>
                <div className='pb-4'>
                  <label className=''>Gender</label><br />
                  <span className='px-4'>
                    < button className='bg-blue-950 text-white px-4 rounded' type='text' name='Male'>Male</button>
                  </span>
                  <button className='px-4 bg-white rounded' type='text' name='Female'>Female</button>
                </div>
                <div className='pb-10'>
                  <label className=''>Address</label><br />
                  <input className='rounded sm:h-10 sm:w-64 '
                    type='text' name='address'
                    onChange={e => setaddress(e.target.value)} />
                  {errors && address.length <= 0 ? 
                  <p className=' text-red-500'>address is required</p>
                   : ""}
                </div>
              </div>

            </div>
          </div>
          <div className='pt-16 bg-blue-950 h-screen w-1/2'>
            <h1 className='text-slate-300 text-2xl sm:text-6xl font-bold'>up</h1>
            <div className='sm:pl-20 pt-8 pb-4 '>
              <label className='text-white'>Phone Number</label><br />
              <input
                type="numeric" name='phone'
                className='lg:pb-8 sm:h-10 rounded sm:w-72'
                onChange={e => setphone(e.target.value)} />
              {errors && !regexp.test(Phone) ? 
              <p className='text-red-500'>Invalid phone number</p>
               : ""}
            </div>
            <div className='sm:pl-20 pb-4'>
              <label className='text-white'>Date of birth</label><br />
              <input type="date" className='lg:pb-8 sm:h-10 rounded sm:w-72' />
            </div>
            <div className='sm:pl-20 pb-2'>
              <label className='text-white'>password</label><br />

              <input className='rounded sm:h-10 sm:w-64 '
                type='password' name='password'
                onChange={e => setpassword(e.target.value)} />
              {errors && password.length <= 8 ? 
              <p className=' text-red-500'>Password must be at least 8 characters long</p> 
              : ""}
            </div>
            <div className='sm:pl-20 pb-2'>
              <label className='text-white'>confirm password</label><br />
              <input className='rounded sm:h-10 sm:w-64 '
                type='password' name='confirmPassword'
                onChange={e => setconfirmPassword(e.target.value)} />
              {errors && (password !== confirmPassword) ? 
              <p className=' text-red-500'>Passwords do not match</p>
               : ""}

            </div>
            <div className='sm:pl-20 pb-4'>
              <p className='text-white'>already have an account?
                <Link to='/Login'>login</Link></p>
              <div className='flex justify-end p-10 pt-0' >
                <button
                  className='border-spacing-3 border border-white text-white px-5 text-xl font-medium border-2 '
                >Next</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup