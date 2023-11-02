

import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses data from an API or use dummy data
    // and update the courses state
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://api.example.com/courses');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourses();
  }, []);

  const getChartData = () => {
    const labels = courses.map((course) => course.name);
    const data = courses.map((course) => course.students);
    const backgroundColors = [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#4BC0C0',
      '#9966FF',
      '#FF9F40',
    ];

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: backgroundColors,
        },
      ],
    };
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">Course Statistics</h2>
          <Pie data={getChartData()} />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Course Details</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th>Course</th>
                <th>Duration</th>
                <th>Students</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.name}</td>
                  <td>{course.duration}</td>
                  <td>{course.students}</td>
                  <td>{course.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

// import React, { useState, useEffect } from 'react';

// const AdminDashboard = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Fetch courses data from an API or use dummy data
//     // and update the courses state
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch('https://api.example.com/courses');
//         const data = await response.json();
//         setCourses(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th>Course</th>
//             <th>Duration</th>
//             <th>Students</th>
//             <th>Cost</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course) => (
//             <tr key={course.id}>
//               <td>{course.name}</td>
//               <td>{course.duration}</td>
//               <td>{course.students}</td>
//               <td>{course.cost}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

