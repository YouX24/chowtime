import AddBar from "./AddBar";
import Generate from "./Generate";
import Item from "./Item";
import Verification from "./Verification";
import OptionDuplicationError from "./OptionDuplicationError";
import OptionCountError from "./OptionCountError";

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

    // remove previous options whenever user clicks back to previous create survey page
    window.onpopstate = () => {
        props.resetOptions()
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#89C7AE] to-blue-400 pb-10 px-4 pt-4">
            {props.showDuplication && <OptionDuplicationError/>}
            {props.showOptionCountError && <OptionCountError/>}
            {props.showVerification && <Verification handleVerification={props.handleVerification}/>}
            <AddBar addItem={props.addItem}/>
            <Generate verifySurveyCreation={props.verifySurveyCreation}/>
            <div className="flex justify-center flex-col items-center mt-10">
                {getAllItems()}
            </div>
        </div>
    )
}

export default Home;