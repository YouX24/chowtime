import { useParams } from "react-router-dom";

const Survey = () => {

    const { id } = useParams()

    return (
        <div min-h-full bg-green-500>
            <p>survey page {id}</p>
        </div>
    )
}

export default Survey;