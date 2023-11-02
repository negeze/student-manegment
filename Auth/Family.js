import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import yourim from "../../materail/yourim.PNG";

function Family() {
  let gotoLogin = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [firstName,setfirstName] = useState('');
  const [lastName,setlastName] =useState('');
  const[phone,setphone] = useState();
  const [email,setemail] = useState();
  const[relationship,setrelationship]=useState('');
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexp = /^\d{10}$/;
  const [error,seterror] = useState(false);
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.length=== 0||lastName.length=== 0){
    seterror(true);
  return ; 
    }

    if (relationship.length===0){
   seterror(true);
   return ;
    }
    if (!regex.test(email)) {
      seterror(true);
      return;
    }
    if (!regexp.test(phone)) {
      seterror(true);
      return;
    }
    gotoLogin("/Login")
  };
  return (
    <div>
       <form className="" onSubmit={handleSubmit}>
    <div className="flex justify-normal">
      <div className="pt-16 bg-gray-300 w-1/2">
     
        <h1 className="text-6xl font-bold flex justify-end text-blue-950">
          sign
        </h1>
        <div className="flex justify-center pt-14 ">
          <img className="h-44 w-44 " src={yourim} />
          </div>
          <div>
            <p className="text-blue-950 flex justify-center  text-2xl pt-8">Upload your photo</p>
          </div>
        
      </div>
      <div className=" bg-blue-950 pt-16 w-1/2">
        <h1 className="text-slate-300 text-6xl font-bold">up</h1>
        <p className="text-slate-300 text-center font-xl ">
          Contact Information
        </p>
        <div className="sm:flex justify-normal pt-8 pb-4 pl-11">
        <div className="pr-32">
          <label className="text-slate-300">First Name</label>
          <br />
           <input className="sm:h-8 rounded" 
           type="text" name="firstName" 
          onChange={e=>setfirstName(e.target.value)} />
          {error &&firstName.length<= 0 ? 
          <p className="text-red-500"> first name is required</p>
          :""}
        </div>
        <div className="">
          <label className="text-slate-300 ">last Name</label> <br />
          <input className="sm:h-8 rounded"
           type="text" 
           name="lastName" 
           onChange={e=>setlastName(e.target.value)}/>
           {error&& lastName.length<=0 ?
           <p className="text-red-500">last name is required</p>
           :""}
        </div>
        </div>
        <div className="pl-11 pb-4">
          <label className="text-slate-300 ">Phone number</label> <br />
          <input className="rounded sm:h-8 sm:w-60" 
          type="numeric" name="phone" 
          onChange={e=>setphone(e.target.value)}/>
          {error&&(!regexp.test(phone))?
          <p className="text-red-500">Invalid phone number</p>
          :""}
        </div>
        <div className="pl-11 pb-4">
          <label className="text-slate-300 ">Email</label>
          <br />
          <input className="sm:w-60 sm:h-8 rounded" 
          type="email" name="email"
          onChange={e=>setemail(e.target.value)} />
          {error && !regex.test(email) ? 
          <p className='text-red-500'>it is not email format</p> : 
          ""}
        </div>
        <div className="pl-11 pb-4">
          <label className="text-slate-300 ">Relation </label>
          <br />
          <input className="rounded sm:w-60 sm:h-8" 
          type="text" name="relation" 
          onChange={e=>setrelationship(e.target.value)}
          />
          {error && relationship.length<=0?
          <p className="text-red-500">the relationship is required </p>
          :""}
        </div>
        <div className="flex justify-end p-11">
          <button
            
            className="text-slate-300 border-spacing-3 border border-white px-5 border-2">
            Finish
          </button>
        </div>
      </div>
     </div>
     </form>
    </div>
  );
}

export default Family;
