
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import SelectedCourse from './components/SelectedCourse/SelectedCourse'
import { useState } from 'react'

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const handleselectedCourse = course => {
    const newCourse=[...selectedCourse,course];
    setSelectedCourse(newCourse);
  }

  return (
    <>
      <div className='bg-[#F3F3F3]'><Header></Header>
        <div className='md:flex'>
          <Courses handleselectedCourse={handleselectedCourse}></Courses>
          <SelectedCourse selectedCourse={selectedCourse}></SelectedCourse>
        </div></div>


    </>
  )
}

export default App
