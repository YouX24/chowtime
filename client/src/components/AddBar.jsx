import { useState, useEffect } from "react";
import { MdCheck } from "react-icons/md"

const AddBar = (props) => {

    const [inputValue, setInputValue] = useState("")
    const [charCount, setCharCount] = useState(15)


    // update inputValue state whenever user types in input box
    const handleInputChange = (e) => {
        if (e.target.value.length === 16) {
            return
        }
        setInputValue(e.target.value)
        setCharCount(15 - e.target.value.length)
    }


    // add value in input box into items state
    const add = () => {
        if (inputValue === "") return
        props.addItem(inputValue)
        setInputValue("")
        setCharCount(15)
    }


    // add value in input box into items state when "Enter" key is pressed
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            add()
        }
    }


    return (
        <div className="flex justify-center flex-col items-center">
            <p className="mt-28 mb-2.5">Add Food or Restaurants</p>
            <div className="flex">
                <input value={inputValue} onChange={handleInputChange} onKeyDown={handleEnter} className="outline-none text-center w-[200px] h-11 rounded-l-lg" type="text"/>
                <button onClick={add} className="bg-[#80A28C] w-[50px] h-11 rounded-r-lg flex justify-center items-center ease-in-out duration-200 hover:scale-105 hover:shadow-md hover:shadow-[#7eb484]"><i><MdCheck className="text-4xl"/></i></button>
            </div>
            <small>Characters Left: {charCount}</small>
        </div>
    )
}

export default AddBar;