import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({ handleselectedCourse }) => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="lg:w-3/4 md:w-2/3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-5">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handleselectedCourse={handleselectedCourse}>

                </Course>)
            }
        </div>
    );
};
Courses.propTypes = {

    handleselectedCourse: PropTypes.func.isRequired
}
export default Courses;