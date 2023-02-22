import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Survey = () => {

    const { surveyID } = useParams()
    const [options, setOptions] = useState([])

    const displayOpt = options.map(option => {
        const {id, optName} = option
        return <p key={id}>{optName}</p>
    })

    useEffect(() => {
        const getOptions = async () => {
            try {
                const response = await fetch("http://localhost:5000/retrieve/" + surveyID, {
                    method: "GET",
                });
                const data = await response.json()
                setOptions(data)
            } catch (error) {
                console.log(error)
            }
        }
        getOptions()
    }, [])

    return (
        <div className="min-h-full bg-green-500">
            <p>survey page</p>
            {displayOpt}
            <div>
                <button className="w-[225px] bg-[#6634F7] rounded-lg text-white h-9">Option 1</button>
                <button className="w-[225px] bg-[#6634F7] rounded-lg text-white h-9">Option 2</button>
            </div>
        </div>
    )
}

export default Survey;