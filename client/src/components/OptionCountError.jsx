const OptionCountError = () => {

    return (
        <div className="flex justify-center relative">
            <div className="bg-red-500 rounded p-2 text-center absolute">
                <p className="text-white">Must have at least 2 options.</p>
            </div>
        </div>
    )
}

export default OptionCountError;