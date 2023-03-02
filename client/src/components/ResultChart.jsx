import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const ResultChart = (props) => {

    const options = {
        scales: {
            x: {
                title:{
                    display: true,
                    text: "Options"
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Votes"
                },
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                }
            }
        }
    }

    return <Bar data={props.chartData} options={options}/>;
};

export default ResultChart;