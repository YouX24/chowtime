import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const ResultChart = (props) => {

    const options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                title:{
                    display: true,
                    text: "Options"
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                }
            },
        }
    }

    return <Bar data={props.chartData} options={options}/>;
};

export default ResultChart;