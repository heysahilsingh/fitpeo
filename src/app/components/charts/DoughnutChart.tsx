import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { generateRandomColors } from '../../utils/utils';
import themeStyle from '../../themeStyle';
import { ReactNode } from 'react';

// Register comps
Chart.register(ArcElement);

type DoughnutChartProps = {
    categories: string[],
    categoriesValue: number[],

    showTooltip: boolean,
    tooltipBodyLabel?: string,
    tooltipBodyValuePrefix?: string,
    tooltipBodyValueSuffix?: string,

    categoriesColor?: string[],

    content?: ReactNode
}

const DoughnutChart = (props: DoughnutChartProps) => {
    // Chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1,
        cutout: "60%",
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

    // Chart Categories Values
    const chartCategoriesValue = props.categoriesValue || chartCategories.map(() => 0);

    // Chart Data
    const chartData = {
        labels: chartCategories,
        datasets: [
            {
                label: '',
                data: chartCategoriesValue,
                backgroundColor: props.categoriesColor || generateRandomColors(chartCategoriesValue.length),
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className="doughnut-chart relative flex items-center justify-center w-full">

            {props.categoriesValue && props.categories && (
                <>
                    {(props.categories.length > 1 && props.categoriesValue.length > 1)
                        ?
                        <>
                            <Doughnut
                                data={chartData}
                                options={chartOptions}
                                className='w-full z-[2]'
                            />
                            {props.content && (
                                <div className="z-[1] flex items-center justify-center absolute w-full h-full top-0 left-0  bg-red-100s pointer-events-none">
                                    <div className="w-[60%] h-auto aspect-square rounded-full overflow-hidden p-4 pointer-events-auto text-center flex items-center justify-center">
                                        {props.content}
                                    </div>
                                </div>
                            )}
                        </>
                        :
                        <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No data to be shown here.</h1>
                    }
                </>
            )}

            {!(props.categoriesValue && props.categories) && (
                <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No data provided.</h1>
            )}
        </div>
    );
}

export default DoughnutChart
