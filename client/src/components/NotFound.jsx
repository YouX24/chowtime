const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#89C7AE] to-blue-400 flex justify-center items-center flex-col">
            <img src="/src/assets/broken.svg" alt="ginger bread man" className="w-44"/>
            <p className="font-bold text-7xl">404</p>
            <p>This Page Does not Exist</p>
        </div>
    )
}

export default NotFound;