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
        console.log("ON MOUNT")
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

    return (
        <div className="h-screen w-screen bg-green-500 flex justify-center items-center">
            {options.length === 0 && <Spinner/>}
            {options.length === 1 && (
                <div>Chow Time! You selected {options[0]}.</div>
            )}
            {options.length > 0 && options.length !== 1 && (
                <div>
                    <p>Which do you prefer?</p>
                    <button onClick={removeOpt} className="w-[225px] bg-[#6634F7] rounded-lg text-white h-9" id="btn-1">{options[0]}</button>
                    <button onClick={removeOpt} className="w-[225px] bg-[#6634F7] rounded-lg text-white h-9" id="btn-2">{options[1]}</button>
                </div>
            )}
            
        </div>
    )
}

export default Survey;