import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../pages/display/Home'
import Courses from '../pages/display/Courses'
import Contact from '../pages/display/Contact'
import About from '../pages/display/About'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import Family from '../pages/Auth/Family'
import Studentedit from '../pages/Students/Studentedit'
import Mycourse from '../pages/Students/Mycourse'
import StudentINfo from '../pages/Students/StudentINfo'
import Attendance from '../pages/Students/Attendance'
import WaitList from '../pages/Students/WaitList'
import Schedule from '../pages/Students/Schedule'
import AdminInfo from '../pages/AdminPage/AdminInfo'
import CourseList from '../pages/AdminPage/CoursesList'
import Instructor from '../pages/AdminPage/Instructor'
import Reception from '../pages/AdminPage/Reception'
import Students from '../pages/AdminPage/Students'
import Contactinformation from '../pages/Students/Contactinformation'
import EditContact from '../pages/Students/EditContact'
import Teacherinfo from '../pages/Teacher/Teacherinfo'
import Teacheredit from '../pages/Teacher/Teacheredit'
import Scheduls from '../pages/Teacher/Scheduls'
import Exams from '../pages/Teacher/Exams'
import Attendances from '../pages/Teacher/Attendances'
import Adminedit from '../pages/AdminPage/Adminedit'
import Addinstractor from '../pages/AdminPage/Addinstractor'
import Addreception from '../pages/AdminPage/Addreception'
import Addcourse from '../pages/AdminPage/Addcourse'
import Addcourse2 from '../pages/AdminPage/Addcourse2'
import Grades from '../pages/Teacher/Grades'
import AdminDashboard from '../pages/AdminPage/AdminDashboard'
import Certificate from '../pages/Students/Certificate'
import Dashboard from '../pages/AdminPage/Dashboard'
function Navgation() {
    return (
        <div>
            <div className="">
                     
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Courses' element={<Courses />} />
                        <Route path='/Contact' element={<Contact />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Login' element={<Login />} />
                        <Route path='/Signup' element={<Signup />} />
                        <Route path='/Family' element={<Family />} />                     
                        <Route path='/StudentINfo' element={<StudentINfo />} />
                        <Route path='/Mycourse' element={<Mycourse />} />
                        <Route path='/Attendance' element={<Attendance />} />
                        <Route path='/WaitList' element={<WaitList />} />
                        <Route path='/Schedule' element={<Schedule />} />
                        <Route path='/AdminInfo' element={<AdminInfo />} />
                        <Route path='/CoursesList' element={<CourseList />} />
                        <Route path='Instructor' element={<Instructor />} />
                        <Route path='Reception'element ={<Reception />} />
                        <Route path='Students' element={<Students />} />
                        <Route path='Contactinformation' element={<Contactinformation/>} />
                        <Route path='Studentedit' element={<Studentedit/>} />
                        <Route path='EditContact' element={<EditContact/>} />                       
                        <Route path='Teacherinfo' element={<Teacherinfo/>} />
                        <Route path='Teacheredit' element={<Teacheredit/>} />
                        <Route path='Scheduls' element={<Scheduls/>} />
                        <Route  path='Exams' element={<Exams/>} />
                        <Route path='Attendances' element={<Attendances/>} />
                        <Route path='Adminedit' element={<Adminedit/>}/>
                        <Route path='Addinstractor' element={<Addinstractor/>}/>
                        <Route path='Addreception' element={<Addreception/>}/>
                        <Route path='Addcourse' element ={<Addcourse/>}/>   
                        <Route path='Addcourse2' element={<Addcourse2/>}/>    
                           <Route path='Grades' element={<Grades/>}/>      
                           <Route path='AdminDashboard' element={<AdminDashboard/>}/> 
                          <Route path='Certificate' element={<Certificate/>}/>
                          <Route path='Dashboard' element={<Dashboard/>}/> 
                    </Routes>
                </Router>

            </div>
        </div>

    )
}

export default Navgation