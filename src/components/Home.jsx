import AddBar from "./AddBar";
import Generate from "./Generate";
import Item from "./Item"

const Home = () => {
    return (
        <>
            <AddBar/>
            <Generate/>
            <div className="flex justify-center">
                <Item/>
            </div>
        </>
    )
}

export default Home;