import { useParams } from "react-router-dom";

const Survey = () => {

    const { id } = useParams()

    return (
        <div className="min-h-full bg-green-500">
            <p>survey page {id}</p>
        </div>
    )
}

export default Survey;