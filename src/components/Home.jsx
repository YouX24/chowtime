import AddBar from "./AddBar";
import Generate from "./Generate";
import Item from "./Item";

const Home = (props) => {

    const allItems = props.items.map(i => <Item key={i} itemName={i}/>)

    return (
        <div className="min-h-screen bg-gray-500">
            <AddBar addItem={props.addItem}/>
            <Generate/>
            <div className="flex justify-center flex-col items-center">
                {allItems}
            </div>
        </div>
    )
}

export default Home;