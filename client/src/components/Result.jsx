import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResultChart from "../components/ResultChart";

const Result = () => {

    const { surveyID } = useParams()
    const [chartData, setChartData] = useState({labels: [], datasets: [],})

    // fetch the data on mount
    useEffect(() => {
        const getResult = async () => {
            try {
                const response = await fetch("https://chowtimebackend.onrender.com/getresult/" + surveyID, {
                    method: "GET",
                });
                const data = await response.json()
                setUpChart(data)
            } catch (error) {
                window.location.href = "/results-not-found"
            }
        }
        getResult()
    }, [])


    const setUpChart = async(resultData) => {
        try {
            setChartData({
                labels: resultData.map(x => x.optName),
                datasets: [
                    {
                    label: 'Votes',
                    data: resultData.map(x => x.wins),
                    backgroundColor: [
                        '#FFDCC8',
                    ],
                    borderColor: [
                        '#3B584D',
                    ],
                    borderWidth: 1,
                    },
                ],
            })
        } catch (error) {
            window.location.href = "/result-not-found"
        }
        
    }

    return (
        <div className="h-screen w-screen bg-[#89C7AE]">
            <div className="xl:w-10/12 m-auto h-full">
                <ResultChart chartData={chartData}/>
            </div>
        </div>
    )
}

export default Result;