import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import logo from '../materail/Logo-300x180.png';
import { FaBars } from 'react-icons/fa';
function Menus() {

  const [showmenu, setshowmenu] = useState("hidden")
  const pathname= window.location.pathname;
  const [scrollDown, setScrollDown] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('bg-blue');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setBackgroundColor(getBackgroundColor());
  }, [scrollDown]);

  const getBackgroundColor = () => {
    
    if (scrollDown) {
      return 'bg-red';
    } else {
      return 'bg-blue';
    }
  };

  const getTextColor = () => {
    if (backgroundColor === 'bg-white') {
      return 'text-black';
    } else if (backgroundColor === 'bg-blue') {
      return 'text-white';
    } else if (backgroundColor === 'bg-red') {
      return 'text-black';
    } else {
      return 'text-white';
    }
  };

  const textColor = getTextColor();
  return (
    <div>

      <div className={`sm:text-2xl fixed top-0 left-0 right-0  ${backgroundColor} ${textColor}`}>
        
        <div className=" lg:hidden flex justify-end pr-4">
         
          <FaBars className=''
           onClick={() => {
            if (showmenu=="hidden") {
               
            setshowmenu('')
            }
            else {
              setshowmenu('hidden')

            }
           
          }}/>
        </div>
        
        <div className=' pt-4 flex justify-normal  hidden sm:flex text-xl font-bold'>
          <div className='px-32'>
        <img className="h-11" src={logo} />
        </div>
        <div className='px-20'>
        <Link className='px-8 ' to='/'>Home</Link>
        <Link className='px-8' to='/Courses'>Courses</Link>
        <Link to='/Contact'>Contact</Link>
        <Link className='px-8' to='/About'>About</Link>
        </div>
        <div className=' bg-blue-900 text-white rounded-2xl  py-1 px-6 '>
          <Link className='bg-white text-black px-5 rounded-full' to='/Login'>Login</Link>
          <Link className='pl-4 pr-6' to='/Signup'>Sign up</Link>
        </div>
     
      </div>

      <div className={`flex  flex-col lg:hidden 2xl:hidden xl:hidden pr-96 ${showmenu}`} >
        <div className='pr-32 '>
          <div className='flex flex-col '>
        <Link className='' to='/'>Home</Link> <br />
        <Link to='/Courses'>Courses</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/About'>About</Link>
        <div className='   py-1  '>
          <Link className='bg-white text-black px-5 rounded-full' to='/Login'>Login</Link><br/>
          <Link className=' pr-6' to='/Signup'>Sign up</Link>
        </div>
      </div>
      </div>
      </div>
    </div>
    </div >
  )
}

export default Menus