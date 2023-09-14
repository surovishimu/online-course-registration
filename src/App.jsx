
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import SelectedCourse from './components/SelectedCourse/SelectedCourse'
import { useState } from 'react'

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalPrice, setTotalPrice] = useState([0]);
  const [totalRemaining, setTotalRemaining] = useState(0);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const handleselectedCourse = course => {
    const isExist = selectedCourse.find(item => item.id == course.id);

    let count = parseFloat(course.price);
    let creditHour = parseInt(course.credit_hours);
    if (isExist) {
      return alert('Already select this course');
    }
    else {
      selectedCourse.forEach(item => {
        count = count + parseFloat(item.price);
        creditHour = creditHour + parseInt(item.credit_hours)
      
      })
      const totalRemaining = 20 - creditHour;
      if (creditHour > 20) {
        return alert('You can not add credit hour more then 20');
      }else {
        setTotalPrice(count);
        setTotalCreditHour(creditHour);
        setTotalRemaining(totalRemaining);
        const newCourse = [...selectedCourse, course];
        setSelectedCourse(newCourse);
      }
      
    }

  }

  return (
    <>
      <div className='bg-[#F3F3F3]'><Header></Header>
        <div className='md:flex'>
          <Courses handleselectedCourse={handleselectedCourse}></Courses>
          <SelectedCourse selectedCourse={selectedCourse} totalPrice={totalPrice} totalCreditHour={totalCreditHour} totalRemaining={totalRemaining}></SelectedCourse>
        </div></div>


    </>
  )
}

export default App
