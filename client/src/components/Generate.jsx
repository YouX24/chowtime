const Generate = (props) => {

    return (
        <div className="flex justify-center mt-3.5">
            <button onClick={props.verifySurveyCreation} className="w-[225px] bg-[#6634F7] rounded-lg text-white h-9">Generate Sharable Link</button>
        </div>
    )
}

export default Generate;