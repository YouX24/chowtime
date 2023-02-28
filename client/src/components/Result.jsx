import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Result = () => {

    const { surveyID } = useParams()
    const [result, setResult] = useState([])

    // fetch the data on mount
    useEffect(() => {
        const getResult = async () => {
            try {
                const response = await fetch("http://localhost:5000/getresult/" + surveyID, {
                    method: "GET",
                });
                const data = await response.json()
                const resultArray = []
                for (let d of data) {
                    const { optName, wins } = d
                    resultArray.push([optName, wins])
                }
                setResult(resultArray)
            } catch (error) {
                console.log(error)
            }
        }
        getResult()
    }, [])


    const resultList = result.map(res => (
        <div key={res[0]}>
            <p>{res[0]} -- {res[1]}</p>
        </div>
        
    ))

    return (
        <div className="min-h-screen bg-[#89C7AE] flex justify-center items-center flex-col">
            {resultList}
        </div>
    )
}

export default Result;