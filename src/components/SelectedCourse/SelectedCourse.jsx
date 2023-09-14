const SelectedCourse = () => {
    return (
        <div className="md:w-1/4 pr-5 mt-10">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-[#2F80ED] text-sm font-semibold  border-b-2 py-2">Credit Hour Remaining: </h2>
                    <h2 className="text-md font-semibold border-b-2 py-4">Course Name:</h2>
                    <h2 className=" text-sm border-b-2 pb-2">Total Credit Hour :</h2>
                    <h2 className=" text-sm ">Total Price:</h2>
                </div>
            </div>
        </div>
    );
};

export default SelectedCourse;