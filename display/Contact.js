import React, { useState } from 'react'
import Course from '../../materail/course.PNG'
import Footer from '../../comoponents/Footer'
import Menus from '../../comoponents/Menus';
import { FaMobileAlt } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
function Contact() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [message, setmessage] = useState('');
  const [error, seterror] = useState(false);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [Send] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length == 0) {
      seterror(true);
      return;
    }
    if (!regex.test(email)) {
      seterror(true);
      return;
    }
    if (message.length == 0) {
      seterror(true);
      return;
    }
    //Send('/Contsct')
  }
  return (
    <div className='bg-white'>
      <Menus />
      <image className='bg-cover bg-center h-900' src={Course}>
        <div className='text-black flex justify-center'>
          <div className='pt-40'>
            <h1 className='text-6xl pb-32 '>Contact</h1>
            <p className=''>if you want to work with us or want to know <br />
              more about us, please use the following options.</p>
          </div>
        </div>
      </image>
      <div className="bg-gray-100">
        <div className='flex-col sm:flex-row flex justify-evenly'>
          <div className=''>
            <h1 className='text-3x sm:text-6xl pl-11 pt-11' >Get In Touch</h1>
            <p className='text-blue-900 sm:text-xl p-11'>
              "Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit. <br />
              Vestibulum sagittis nisi ac enim fringilla, <br />
              nec suscipit arcu pharetra."
            </p>
          </div>
          <div className='flex justify-center sm:flex justify-center'>

            <form onSubmit={handleSubmit}
              className='w-96 bg-stone-300 rounded-2xl '>
              <div className='p-8'>
                <input
                  type="text"
                  name='name'

                  className=" text-black px-4 py-2 h-12 w-80 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="name  "
                  onChange={e => setname(e.target.value)} />
              </div>
              {error && name.length <= 0 ? <p className='text-red-500'>sender name is required </p> : ""}
              <div className='p-8'>
                <input
                  type="email"
                  name='email'

                  className=" text-black px-4 py-2 w-80 h-12 rounded-xl border border-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="email  "
                  onChange={e => setemail(e.target.value)} />
              </div>
              {error && (!regex.test(email)) ? <p className='text-red-500'>it is not email format</p> : ""}
              <div className="p-8">
                <textarea
                  className='rounded-xl w-80'
                  placeholder="message" rows="5"

                  onChange={e => setmessage(e.target.value)}
                />
                {error && message.length <= 0 ? <p className='text-red-500'>the message is required</p> : ""}
              </div>
              <div className='flex justify-end pr-8 pb-8'>
                <button
                  className='rounded w-24 border-spacing-3 border bg-gray-900 text-stone-400 text-center  text-2xl font-normal border-2'
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className='flex-col sm:flex-row flex justify-evenly p-16 '>
          <div className=' bg-stone-300 rounded-2xl mb-8 sm:mb-0  flex justify-normal'>
            <div className='p-10'>
              <FaEnvelopeOpenText className='w-14 h-24 text-gray-700' />
            </div>
            <div className=''>
              <p className='pt-10 pr-16'>
                <span className='py-4 text-2xl font-fontawesome'> Email</span><br />
                info@omishtujoy.com<br />
                omishtujoy@gmail.com</p>
            </div>
          </div>
          <div className=" bg-stone-300 rounded-2xl mb-8 sm:mb-0 p-8">
            <div className='flex justify-normal'>
              <div className="pt-7 pr-4">
                <FaMobileAlt className='h-24 w-12 text-gray-600' />
              </div>
              < p className='px-6'>
                <span className='pb-4 text-2xl font-fontawesome'>  Phone</span><br />
                + 251 916 396011<br />
                + 251 932 265791<br />
                + 251 939 140883</p>
            </div>
          </div>
          <div className=' bg-stone-300 p-10 rounded-2xl '>
            <div className='flex justify-normal'>
              <FaMapMarkerAlt className='h-28 w-16 text-gray-700' />
              <p className='pl-4'>
                <span className='pb-4 text-2xl font-fontawesome'>Location</span> <br />
                Addis Ababa,EthiopiaYeka <br />
                Sub-City, Megenegna , <br />
                Metebaber building, 7th floor,<br />
                office number: 711A</p>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </div>

  )
}

export default Contact







