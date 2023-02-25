const Generate = (props) => {

    return (
        <div className="flex justify-center mt-3.5">
            <button onClick={props.verifySurveyCreation} className="w-[225px] bg-[#3B584D] rounded-lg text-white h-9 shadow-md shadow-gray-400 ease-in-out duration-200 hover:scale-105 hover:shadow-lg hover:shadow-gray-500">Generate Sharable Link</button>
        </div>
    )
}

export default Generate;