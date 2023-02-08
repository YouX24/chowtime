import AddBar from "./AddBar";
import Generate from "./Generate";
import Item from "./Item";
import Option from "./Option";

const Home = () => {
    return (
        <>
            <AddBar/>
            <Generate/>
            <div className="flex justify-center">
                <Item/>
            </div>
            <Option/>
        </>
    )
}

export default Home;