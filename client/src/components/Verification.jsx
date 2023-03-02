const Verification = (props) => {

    return (
        <div className="h-screen w-screen absolute top-0 left-0 p-4 flex items-center justify-center bg-black/[.7] z-50">
            <div className="flex justify-center items-center flex-col bg-[#FFDCC8] p-4 h-52 rounded-lg">
                <p className="text-center">Are finished adding Food/Restaurants?</p>
                <div className="flex justify-center gap-4 pt-4">
                    <button onClick={props.handleVerification} value="Yes" className="bg-green-500 w-20 h-10 rounded-lg ease-in-out duration-200 hover:scale-105">Yes</button>
                    <button onClick={props.handleVerification} value="No" className="bg-red-500 w-20 h-10 rounded-lg ease-in-out duration-200 hover:scale-105">No</button>
                </div>
            </div>
        </div>
    )
}

export default Verification;