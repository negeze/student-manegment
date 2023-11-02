import React from "react";
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
    return (
        <div className="bg-zinc-600">
            <div className=" text-white flex justify-evenly">
                <div className="">
                    {/* <h1 className="text-xl sm:text-6xl">Hello, World!</h1> */}
                    <h6 className="text-2xl sm:text-4xl pt-4 sm:pt-10 pb-4 sm:pb-10">Address</h6>
                    <p className=" sm:text-2xl">
                        Addis Ababa, Ethiopia Megenegna,
                        <br />
                        metebaber Building, 7th floor, office
                        <br />
                        number 711A
                    </p>


                </div>
                <div className="">
                    <h4 className="text -xl sm:text-4xl pt-4 sm:pt-10 pb-4 sm:pb-10">Quick Links</h4>
                    <a href="/">Home</a><br />
                    <a href="/About">About</a><br />
                    <a href="/Courses">Courses</a><br />
                    <a href="/Contact">Contact</a><br />
                </div>
                <div className="Contact">
                    <h4 className="text-2xl sm:text-4xl pt-4 sm:pt-10 pb-4 sm:pb-10">Contact</h4>
                    <p>
                        connect with entrepreneurs,
                        <br />
                        build your network, <br />
                        make great business.
                    </p>
                    <div className="flex justify-evenly py-8">
                        <FaLinkedin className="w-6 h-6 text-white" />
                        <FaFacebook className="w-6 h-6 text-white" />
                        <FaInstagram className="w-6 h-6 text-white" />
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-300 my-6"></div>
            <div className="flex justify-center text-white py-20 text-xl font-fontawesome">
                <p>&copy; {new Date().getFullYear()}  omishtu-joy.</p>
            </div>

        </div>
    );
}

export default Footer;
