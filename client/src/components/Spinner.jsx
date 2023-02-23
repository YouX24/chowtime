import { RotatingTriangles } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className="flex flex-col justify-center items-center w-screen h-screen">
            <RotatingTriangles
                visible={true}
                height="80"
                width="80"
                ariaLabel="rotating-triangels-loading"
                wrapperStyle={{}}
                wrapperClass="rotating-triangels-wrapper"
                colors={['#B1E9A3', '#7AC38F', '#88E0D0']}
            />
            <p className="text-lg text-center px-2">Loading Survey</p>
        </div>
    )
}

export default Spinner