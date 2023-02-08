import AddBar from "./AddBar";
import Generate from "./Generate";
import Item from "./Item";
import Option from "./Option";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-500">
            <AddBar/>
            <Generate/>
            <div className="flex justify-center">
                <Item/>
            </div>
            <Option/>
        </div>
    )
}

export default Home;