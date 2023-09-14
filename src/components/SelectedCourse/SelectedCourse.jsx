import PropTypes from 'prop-types';
const SelectedCourse = ({ selectedCourse }) => {
    return (
        <div className="md:w-1/4 pr-5 mt-10">
            <div className='card bg-base-100 shadow-xl mx-5'>
                <div className='card-body'>
                    <h2 className="text-[#2F80ED] text-sm font-semibold  border-b-2 py-2">Credit Hour Remaining:</h2>
                    <h1 className='font-bold'>Course Name</h1>
                    {
                        selectedCourse.map(singleCourse => <li className='list-decimal text-sm text-gray-500' key={singleCourse.id} >{singleCourse.course_name}</li>)

                    }
                    <h2 className=" text-sm border-y-2 py-4">Total Credit Hour :</h2>
                    <h2 className=" text-sm ">Total Price:</h2>
                </div>
            </div>

        </div>
    );
};

SelectedCourse.propTypes = {
    selectedCourse: PropTypes.array.isRequired
}
export default SelectedCourse;