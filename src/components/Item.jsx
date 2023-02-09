import { MdClose } from "react-icons/md";

const Item = (props) => {

    // remove item from itemsObj, referencing the unique itemID that was assigned to each item
    const remove = () => {
        props.removeItem(props.itemID)
    }

    return (
        <div className="relative flex justify-center items-center w-[250px] h-[35px] bg-white rounded-lg my-2">
            <p>{props.itemName}</p>
            <button onClick={remove} className="absolute right-2.5 rounded-full bg-[#F64545] w-6 h-6 flex justify-center items-center"><i><MdClose className="text-white"/></i></button>
        </div>
    )
}

export default Item