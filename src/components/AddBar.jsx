import { useState } from "react";
import { MdCheck } from "react-icons/md"

const AddBar = (props) => {

    const [inputValue, setInputValue] = useState("")


    // update inputValue state whenever user types in input box
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }


    // add value in input box into items state
    const add = () => {
        if (inputValue === "") return
        props.addItem(inputValue)
        setInputValue("")
    }


    return (
        <div className="flex justify-center flex-col items-center">
            <p className="mb-2.5">Add Food or Restaurants</p>
            <div className="flex">
                <input value={inputValue} onChange={handleInputChange} className="outline-none text-center w-[200px] h-11 rounded-l-lg" type="text"/>
                <button onClick={add} className="bg-[#29D95B] w-[50px] h-11 rounded-r-lg flex justify-center items-center"><i><MdCheck className="text-4xl"/></i></button>
            </div>
        </div>
    )
}

export default AddBar;