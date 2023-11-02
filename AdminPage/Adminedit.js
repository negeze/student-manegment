import React, { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import profile from '../../materail/Samplepro.PNG'
import { useNavigate } from 'react-router-dom'
import Admin from '../../comoponents/Adminmenu'
import axios from 'axios'
import FileInputComponent from '../../comoponents/FileInputComponent'
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
import Menu from '../../comoponents/Menu'
function Adminedit() {
    const [firstName, setfirstName] = useState('');
    const [middleName, setmiddleName] = useState('');
    const [lastName, setlastName] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [error, seterror] = useState(false);
    const regexp = /^\d{10}$/;
    const update = useNavigate();
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
    useEffect(() => {
        // Fetch the user's profile data from the backend
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {
            const response = await axios.get('/api/profile');
            const { name, email } = response.data;

            // setName(name);
            // setEmail(email);
        } catch (error) {
            console.error(error);
        }
    };


    const handleSubmitted = (e) => {
        e.preventDefault();
        if (firstName.length === 0 || lastName.length === 0) {
            seterror(true);
            return;
        }
        if (middleName.length === 0 || address.length === 0) {
            seterror(true);
            return;
        }
        if (!regexp.test(phone)) {
            seterror(true);
            return;
        }
        update('/');
    };
    return (
        <div>
            <div className="bg-cover bg-center h-full"
                style={{ backgroundImage: `url(${Abstract})` }}>
                <Admin />
                <Menu />
                <div className='pt-24 sm:pr-20 pl-44 sm:pl-80 '>
                    <p className='text-slate-300 py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal'>
                        <FaUser className='h-8 w-8' />

                        <span className='pl-4 font-semibold'>Edit Personal info.</span>
                    </p>
                </div>

                <div className='flex-col sm:flex-row flex justify-normal sm:pt-16 sm:pr20  pl-80'>

                    <form className=''>

                        <img className='  rounded-2xl sm:pt-12 ' src={profile} >
                        </img><br />
                        <FileInputComponent className='pb-4' onFileSelect={handleFileSelect} />
                        <button
                            className='sm:text-xl font-semibold text-gray-700'
                            onClick={handleFileUpload}>Upload your photo</button>


                    </form>
                    <form className='' onSubmit={handleSubmitted}>
                        <div className=' sm:flex justify-normal '>

                            <div className='sm:pl-4 sm:pr-20 '>
                                <div className='pb-3'>
                                    <label className='text-gray-700 sm:text-xl font-semibold '>
                                        First Name:</label><br /></div>
                                <input type="text"
                                    className='sm:py-2 sm:px-4 sm:rounded'
                                    onChange={e => setfirstName(e.target.value)}
                                />
                                {error && firstName.length <= 0 ?
                                    <p className='text-red-500'>first name is required</p>
                                    : ""}
                                <br />
                                <div className='py-3'>
                                    <label className='text-gray-700 sm:text-xl font-semibold '>Middle Name:</label><br />
                                </div>
                                <input type="text" className='sm:py-2 sm:px-4 sm:rounded'
                                    onChange={e => setmiddleName(e.target.value)} />
                                {error && middleName.length <= 0 ?
                                    <p className='text-red-500'>middle name is required</p>
                                    : ""}
                                <br />
                                <div className='py-3'>
                                    <label className='text-gray-700 sm:text-xl font-semibold'>last Name:</label><br />
                                </div>
                                <input type="text" className='sm:py-2 sm:px-4 sm:rounded'
                                    onChange={e => setlastName(e.target.value)} />
                                {error && lastName.length <= 0 ?
                                    <p className='text-red-500'>last name is required</p>
                                    : ""}
                                <br />
                                <div className='py3'> 
                                <label className='text-gray-700 sm:text-xl font-semibold '>Date of birth:</label><br />
                                </div>
                                <input type="date" className='sm:py-2 sm:px-4 sm:rounded' />



                            </div>
                            <div className="sm:pl-4">
                                <div className='pb-3'>       
                                <label className='text-gray-700 sm:text-xl font-semibold '>phone:</label><br /></div>
                                <input type="numeric" className='sm:py-2 sm:px-4 sm:rounded'
                                    onChange={e => setphone(e.target.value)} />
                                {error && !regexp.test(phone) ? <p className='text-red-500'>Invalid phone number</p> : ""}
                                <br />
                                <div className='py-3'> 
                                <label className='text-gray-700 sm:text-xl font-semibold'>Address:</label><br /></div>
                                <input type="text" className='sm:py-2 sm:px-4 sm:rounded'
                                    onChange={e => setaddress(e.target.value)} />
                                {error && address.length <= 0 ?
                                    <p className=' text-red-500'>address is required</p>
                                    : ""}
                            </div>
                        </div>
                        <div className='flex justify-end py-14  pl-64'>
                            <button className='bg-blue-950 px-5 text-white rounded font-semibold'>Update</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Adminedit