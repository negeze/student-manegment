import React, { useState } from 'react'
import Adminmenu from '../../comoponents/Adminmenu'
import Courses from '../display/Courses';
import { LineChart, Line    } from 'recharts'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
function Dashboard() {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      const[cout,setcount]=useState(0)
    
    return (
        <div>

            <div className="bg-cover bg-center h-full"
                style={{ backgroundImage: `url(${Abstract})` }}>
                <Adminmenu />


                <div className='flex justify-normal pl-72 pt-24  '>

                    <div className=" rounded-xl hover:scale-x-125 bg-red-300 hover:bg-opacity-50 h-40 w-80 cursor-pointer ">
                        <h1 className="text-2xl text-blue-950 px-10  ">Courses</h1>
                        <p className="text-blue-950">
                        </p>

                    </div>
                    <div className="px-6">
                        <div className=" rounded-xl  hover:scale-x-125 h-40 w-80 cursor-pointer  bg-cyan-700 hover:bg-opacity-50">
                            <h1 className="text-2xl  px-10 text-yellow-50 hover:text-blue-700   ">Students</h1>
                        </div>
                    </div>
                    <div className="">
                        <div className="rounded-xl hover:scale-x-150 h-40 w-72 cursor-pointer  bg-fuchsia-950 hover:bg-opacity-50 ">
                            <h1 className="text-2xl  px-10 text-white">Teachers</h1>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                <button className='py-10'onClick={()=>setcount(cout+1)}>Increament</button>
                <h1 className="text-2xl px-10 text-white">{cout}</h1>
               </div>
      <ResponsiveContainer  className ="h-full w-full">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid  ="33" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Dashboard