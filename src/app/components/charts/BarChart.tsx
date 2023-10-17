import { Chart, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import themeStyle from '../../themeStyle';

// Register comps
Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
);

// Chart options
const chartOptions = {
    responsive: true,
    elements: {
        bar: {
            borderRadius: 10,
            borderSkipped: false,
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
                maxRotation: 0,
                minRotation: 0,
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
    plugins: {
        tooltip: themeStyle.CHART_TOOLTIP,
    },
};

type BarChartProps = {
    labels: string[],
    data: string | number[],
    tooltipTitle?: string,
    className?: string
}

const BarChart = (props: BarChartProps) => {

    const barThickness = 40;

    // Chart labels
    const chartLabels = props.labels || [];

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
                hoverBackgroundColor: 'rgb(90, 50, 234)',
                barThickness,
            }
        ],
    };

    return (
        <div className="bar-chart flex items-center">
            {props.data && props.labels && (
                <>
                    {(props?.labels.length > 1 && props.data.length > 1)
                        ?
                        <Bar
                            className={`${props.className || ""} pb-3`}
                            options={chartOptions}
                            data={data}
                            width={(data.labels.length * barThickness) + (data.labels.length * 20)}
                            height={300}
                        />
                        :
                        <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No data to be shown here..</h1>
                    }
                </>
            )}

            {!(props.data && props.labels) && (
                <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No data provided.</h1>
            )}
        </div>
    )
}

export default BarChart