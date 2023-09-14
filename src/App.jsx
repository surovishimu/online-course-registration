
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import SelectedCourse from './components/SelectedCourse/SelectedCourse'
import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';

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
      return toast('You cannot select the same course more than once!', {
        icon: '⚠️',
        duration: 3000,
        style: {
          height: '100px',
          borderRadius: '10px',

        },
      });
    }
    else {
      selectedCourse.forEach(item => {
        count = count + parseFloat(item.price);
        creditHour = creditHour + parseInt(item.credit_hours)

      })
      const totalRemaining = 20 - creditHour;
      if (creditHour > 20) {
        return toast('You cannot select more than 20 credit hours!', {
          icon: '⚠️',
          duration: 3000,
          style: {
            height: '100px',
            borderRadius: '10px',

          },
        });
      } else {
        setTotalPrice(count.toFixed(2));
        setTotalCreditHour(creditHour);
        setTotalRemaining(totalRemaining);
        const newCourse = [...selectedCourse, course];
        setSelectedCourse(newCourse);
      }

    }

  }

  return (
    <>
      <div className='bg-[#F3F3F3]'>
        <Toaster position="top-center"
          reverseOrder={false} />
        <Header></Header>
        <div className='md:flex'>
          <Courses handleselectedCourse={handleselectedCourse}></Courses>
          <SelectedCourse selectedCourse={selectedCourse} totalPrice={totalPrice} totalCreditHour={totalCreditHour} totalRemaining={totalRemaining}></SelectedCourse>
        </div></div>


    </>
  )
}

export default App
