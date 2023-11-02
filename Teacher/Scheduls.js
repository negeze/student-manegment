import React, { useState } from 'react'
import { FaRegCalendarCheck} from 'react-icons/fa'
import TeachersMenu from '../../comoponents/TeachersMenu'
import Menu from '../../comoponents/Menu';
import Abstract from '../../materail/Abstract_background_light_steel_blue_wallpaper_image_free_image.jpeg'
function Scheduls() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const times = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];

  const courses = [
    { day: 'Monday', time: '10:00 AM', courseName: 'web development ' },
    { day: 'Tuesday', time: '11:00 AM', courseName: 'machine learning' },
    { day: 'Wednesday', time: '9:00 AM', courseName: 'AI' },
  ];
  return (
    <div>
      <div className="bg-cover bg-center h-full"
        style={{ backgroundImage: `url(${Abstract})` }}>
        <TeachersMenu/>
        <Menu/>
        <div className='pt-28 sm:pr-20 pl-44 sm:pl-80 '>
      <p className='text-slate-400 py-2 pl-4 rounded text-2xl  bg-blue-950 flex justify-normal'>
      <FaRegCalendarCheck className='h-8 w-8'/>     
         <span className='pl-11'>Schedule</span> 
        </p>
      </div>
      <div className='pl-48 sm:pl-80 pt-10 pb-36 '>
      <div className="container mx-auto">
      <table className="table-auto border-collapse">
        <thead>
          <tr>
            <th className="border-2  border-gray-700 px-1 sm:px-6 sm:py-4">Time</th>
            {days.map((day) => (
              <th className="border-2  border-gray-700 px-1 sm:px-6 sm:py-4" key={day}>
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td className="border-2  border-gray-700 px-1 sm:px-6 sm:py-4">{time}</td>
              {days.map((day) => {
                const course = courses.find(
                  (c) => c.day === day && c.time === time
                );
                const cellContent = course ? course.courseName : '';

                return (
                  <td className="border-2  border-gray-700 px-1 sm:px-6 sm:py-4" key={`${day}-${time}`}>
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    </div>
    </div>
  )
}

export default Scheduls