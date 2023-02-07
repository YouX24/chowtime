import { MdCheck } from "react-icons/md"

const AddBar = () => {

    return (
        <div className="flex justify-center flex-col items-center">
            <p className="mb-2.5">Add Food or Restaurants</p>
            <div className="flex">
                <input className="outline-none text-center w-[200px] h-11 rounded-l-lg" type="text"/>
                <button className="bg-[#29D95B] w-[50px] h-11 rounded-r-lg flex justify-center items-center"><i><MdCheck className="text-4xl"/></i></button>
            </div>
        </div>
    )
}

export default AddBar;