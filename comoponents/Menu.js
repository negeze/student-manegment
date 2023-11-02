import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from '../materail/Logo-300x180.png';
import { FaArrowCircleRight, FaBars, FaSyncAlt, FaUserCircle } from 'react-icons/fa';
import classNames from 'classnames';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
function Menu() {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showlist, setshowlist] = useState('hidden')

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos || currentScrollPos < 8;

        setPrevScrollPos(currentScrollPos);
        setVisible(visible);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [showmenu, setshowmenu] = useState("hidden")

    return (
        <div>
            <div className={classNames(
                'fixed top-0 left-0 w-full py-4 transition-all duration-300',
                {
                    'transform translate-y-0': visible,
                    '-translate-y-full': !visible,
                }
            )}>
                <div className=" lg:hidden flex justify-end pr-4">

                    <FaBars className=''
                        onClick={() => {
                            if (showmenu === "hidden") {

                                setshowmenu('')
                            }
                            else {
                                setshowmenu('hidden')

                            }

                        }} />
                </div>
                <img className="h-11" src={logo} />
                <div className='pl-96 pt-0 flex justify-evenly text-xl font-bold  hidden sm:flex '>
                    <Link className='pl-36  ' to='/'>Home</Link>
                    <Link className='px-4' to='/Courses'>Courses</Link>
                    <Link to='/Contact'>Contact</Link>
                    <Link className='px-4' to='/About'>About</Link>
                    <div className='flex flex-col'>
                        <div className=' bg-blue-900 text-white rounded-2xl  py-1 px-6 ' >
                            <p className='flex justify-normal'

                                onClick={() => {
                                    if (showlist == "hidden") {
                                        setshowlist('');
                                    }
                                    else {
                                        setshowlist('hidden');
                                    }
                                }

                                }
                            >
                                <FaUserCircle className='h-8 w-8 text-stone-400 ' />
                                <span className='pl-4 text-xl text-slate-400'> Full Name



                                </span> </p>
                        </div>
                        <div className=''>
                            <div className='border-1  bg-blue-900 text-slate-400 '>
                                <Link to='' className={`${showlist} flex justify-normal text-xl font-light`}>
                                    <faNoteSticky className='h-5 ' />
                                    <span>Notification</span></Link>

                                <Link to='' className={`${showlist} flex justify-normal text-xl font-light`}>
                                    <FaSyncAlt className='h-5 ' />
                                    <span>Change Password</span>
                                </Link>
                                <Link to='' className={`${showlist} flex justify-normal text-xl font-light px-10`}>
                                    <FaArrowCircleRight className='h-5 ' />
                                    <span>Logout</span>
                                </Link>
                            </div></div>
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
                                <Link className='bg-white text-black px-5 rounded-full' to='/Login'>Login</Link><br />
                                <Link className=' pr-6' to='/Signup'>Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Menu