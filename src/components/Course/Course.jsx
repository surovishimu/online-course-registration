import PropTypes from 'prop-types';
import { FaDollarSign } from 'react-icons/fa';
import { FaBookOpen } from 'react-icons/fa';
const Course = ({ course, handleselectedCourse }) => {
    const { course_name, image_url, description, price, credit_hours } = course;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl -space-y-5 mt-10 h-96">
                <figure className="px-5 pt-4 ">
                    <img src={image_url} alt="Shoes" className="rounded-xl h-full w-full " />
                </figure>
                <div className="card-body  text-start px-5 ">
                    <h2 className="text-md font-bold">{course_name}</h2>
                    <small className='text-stone-400'>{description}</small>
                    <div className='flex gap-10 '>
                        <small className='text-stone-400'> <FaDollarSign className='inline text-lg text-gray-700'></FaDollarSign> Price:{price}</small>
                        <small className='text-stone-400 '><FaBookOpen className='inline mr-2 text-gray-700 text-lg'></FaBookOpen>Credit:{credit_hours}hr</small>
                    </div>
                    <div className="card-actions ">
                        <button onClick={() => handleselectedCourse(course)} className=" btn bg-[#2F80ED] text-lg text-white normal-case w-full mt-5 hover:bg-[#2F80ED]">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleselectedCourse: PropTypes.func.isRequired
}
export default Course;