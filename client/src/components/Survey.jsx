import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const Survey = () => {

    const { surveyID } = useParams()
    const [options, setOptions] = useState([])


    // fetch the data on mount
    useEffect(() => {
        const getOptions = async () => {
            try {
                const response = await fetch("http://localhost:5000/retrieve/" + surveyID, {
                    method: "GET",
                });
                const data = await response.json()
                const optArray = []
                for (let d of data) {
                    const { optName } = d
                    optArray.push(optName)
                }
                setOptions(optArray)
            } catch (error) {
                console.log(error)
            }
        }
        getOptions()
    }, [])


    // narrow down the options
    const removeOpt = (e) => {
        let remove = null
        if (e.target.getAttribute("id") === "btn-1") {
            remove = document.getElementById("btn-2").innerHTML
        } else {
            remove = document.getElementById("btn-1").innerHTML
        }

        let optionsCopy = []
        for (let opt of options) {
            if (opt !== remove) {
                optionsCopy.push(opt)
            }
        }

        setOptions(optionsCopy)
    }


    const updateWinner = async () => {
        try {
            await fetch("http://localhost:5000/update-win", {
                method: "PUT",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    option: options[0],
                    surveyID: surveyID
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (options.length === 1) {
            console.log("hi")
            updateWinner()
        }
    }, [options])

    const btnStyle = "w-40 h-12 bg-[#FFDCC8] text-[#36395A] rounded-md shadow-md shadow-gray-400 ease-in-out duration-200 hover:scale-105 hover:shadow-lg hover:shadow-gray-500"
    return (
        <div className="h-screen w-screen bg-[#89C7AE] flex justify-center items-center">
            {options.length === 0 && <Spinner/>}
            {options.length === 1 && (
                <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-center">Chow Time! You selected <b>{options[0]}</b>.</p>
                    <a href={`/result/${surveyID}`} target="_blank"><button className="bg-[#FFDCC8] rounded-full w-28 h-10 shadow-md shadow-gray-400 ease-in-out duration-200 hover:scale-105 hover:shadow-lg hover:shadow-gray-500">View Results</button></a>
                </div>
            )}
            {options.length > 0 && options.length !== 1 && (
                <div className="flex flex-col items-center">
                    <p className="text-lg">Which do you prefer?</p>
                    <div className="flex gap-4 mt-4 items-center flex-col sm:flex-row">
                        <button className={btnStyle} onClick={removeOpt} id="btn-1">{options[0]}</button>
                        <p>OR</p>
                        <button className={btnStyle} onClick={removeOpt} id="btn-2">{options[1]}</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Survey;