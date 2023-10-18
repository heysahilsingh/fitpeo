import { Chart, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import themeStyle from '../../themeStyle';
import { useEffect, useState } from 'react';

// Register comps
Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
);

type BarChartProps = {
    categories: string[],
    categoriesValue: number[],

    showTooltip: boolean,
    tooltipBodyLabel?: string,
    tooltipBodyValuePrefix?: string,
    tooltipBodyValueSuffix?: string,

    barColor?: string[],
    barHoverColor?: string[],

    className?: string
}

const BarChart = (props: BarChartProps) => {

    const barThickness = 40;
    const [chartWidth, setChartWidth] = useState(0);

    // Chart options
    const chartOptions = {
        // responsive: true,
        maintainAspectRatio: false,
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
            tooltip: {
                ...themeStyle.CHART_TOOLTIP,
                enabled: props.showTooltip,
                callbacks: {
                    label: function (context: { formattedValue: string }) {
                        return `${props.tooltipBodyLabel || ""} ${props.tooltipBodyValuePrefix || ""}${context.formattedValue}${props.tooltipBodyValueSuffix || ""}`;
                    },
                },
            },
        },
    };

    // Chart Categories
    const chartCategories = props.categories || [];

    // Chart Categories value
    const chartCategoriesValue = props.categoriesValue || chartCategories.map(() => 0);

    // Chart data
    const chartData = {
        labels: chartCategories,
        datasets: [
            {
                label: "",
                data: chartCategoriesValue,
                backgroundColor: props.barColor || 'rgb(90, 50, 234, 0.2)',
                hoverBackgroundColor: props.barHoverColor || 'rgb(90, 50, 234)',
                barThickness,
            }
        ],
    };

    // Update the width of the chart
    useEffect(() => {
        setChartWidth((chartCategories.length * barThickness) + ((chartCategories.length - 1) * 20) + 40)
    }, [props.categories])

    return (
        <div className="bar-chart flex items-center w-full">
            {props.categoriesValue && props.categories && (
                <>
                    {(props.categories.length > 1 && props.categoriesValue.length > 1)
                        ?
                        <div style={{ minWidth: chartWidth, width: chartWidth, height: 300, position: "relative" }}>
                            <Bar
                                className={`${props.className || ""} pb-3`}
                                options={chartOptions}
                                data={chartData}
                            />
                        </div>

                        :
                        <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No data to be shown here..</h1>
                    }
                </>
            )}

            {!(props.categoriesValue && props.categories) && (
                <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No data provided.</h1>
            )}
        </div>
    )
}

export default BarChart