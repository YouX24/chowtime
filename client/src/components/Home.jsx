import AddBar from "./AddBar";
import Generate from "./Generate";
import Item from "./Item";

const Home = (props) => {

    // return a list of <Item/> components from itemObj state
    const getAllItems = () => {
        let keyItems = []
        for (const [k, v] of Object.entries(props.itemsObj)) {
            keyItems.push([k, v])
        }
        const allItems = keyItems.map(item => <Item key={item[0]} itemID={item[0]} itemName={item[1]} removeItem={props.removeItem}/>)
        return allItems
    }

    return (
        <div className="min-h-screen bg-gray-500 pb-10">
            <AddBar addItem={props.addItem}/>
            <Generate createSurvey={props.createSurvey}/>
            <div className="flex justify-center flex-col items-center mt-10">
                {getAllItems()}
            </div>
        </div>
    )
}

export default Home;