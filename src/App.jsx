
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import SelectedCourse from './components/SelectedCourse/SelectedCourse'

function App() {


  return (
    <>
      <div className='bg-[#F3F3F3]'><Header></Header>
        <div className='md:flex'>
          <Courses></Courses>
          <SelectedCourse></SelectedCourse>
        </div></div>


    </>
  )
}

export default App
