import { Chart, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register comps
Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
);

// Chart options
const chartOptions = {
    elements: {
        bar: {
            borderRadius: 15,
            borderSkipped: false
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
            },
            ticks: {
                font: {
                    size: 14,
                    weight: "bold"
                },
            },
        },
        y: {
            grid: {
                display: false,
                drawBorder: false
            },
            ticks: {
                font: {
                    size: 14,
                    weight: "bold"
                },
            },
        },
    },
};

type BarChartProps = {
    labels: string[],
    data: string | number[],
    tooltipTitle?: string
}

const BarChart = (props: BarChartProps) => {

    // Chart labels
    const chartLabels = props.labels || [""];

    // Chart data
    const chartData = chartLabels.map(() => Math.floor(Math.random() * 101));

    // data
    const data = {
        labels: chartLabels,
        datasets: [
            {
                label: props.tooltipTitle || "",
                data: chartData,
                backgroundColor: 'rgb(90, 50, 234, 0.2)',
                hoverBackgroundColor: 'rgb(90, 50, 234)'
            }
        ],
    };

    return (
        <div className="bar-chart flex w-full items-center">
            {props.labels && props.data && props.labels.length > 1 && props.data.length > 1
                ?
                <Bar className="w-full" options={chartOptions} data={data} />
                :
                <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No data to be shown here..</h1>
            }
        </div>

    )
}

export default BarChart