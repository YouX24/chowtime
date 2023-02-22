const OptionDuplicationError = () => {

    return (
        <div className="flex justify-center relative">
            <div className="bg-red-500 rounded p-2 text-center absolute">
                <p className="text-white">Cannot have duplication options</p>
            </div>
        </div>
    )
}

export default OptionDuplicationError;