import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Survey = () => {

    const { surveyID } = useParams()
    const [options, setOptions] = useState([])

    const displayOpt = options.map(option => {
        const {id, optName, surveyID} = option
        return <p key={id}>{optName}</p>
    })

    useEffect(() => {
        const getOptions = async () => {
            try {
                const response = await fetch("http://localhost:5000/retrieve/" + surveyID, {
                    method: "GET",
                });
                const data = await response.json()
                console.log("data", data)
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
        </div>
    )
}

export default Survey;