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
                const response = await fetch("http://localhost:5000/getresult/" + surveyID, {
                    method: "GET",
                });
                const data = await response.json()
                setUpChart(data)
            } catch (error) {
                console.log(error)
            }
        }
        getResult()
    }, [])


    const setUpChart = async(resultData) => {
        setChartData({
            labels: resultData.map(x => x.optName),
            datasets: [
                {
                label: 'Votes',
                data: resultData.map(x => x.wins),
                backgroundColor: [
                    'rgb(123, 233, 173)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
                },
            ],
        })
    }

    return (
        <div className="min-h-screen bg-[#89C7AE] flex justify-center items-center flex-col">
            <ResultChart chartData={chartData}/>
        </div>
    )
}

export default Result;