import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { generateRandomColors } from '../../utils/utils';
import themeStyle from '../../themeStyle';

// Register comps
Chart.register(ArcElement);

// Chart options
const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    cutout: "70%",
    plugins: {
        tooltip: themeStyle.CHART_TOOLTIP,
    },
};

type DoughnutChartProps = {
    labels: string[],
    data: string | number[],
    dataColors?: string[],
}

const DoughnutChart = (props: DoughnutChartProps) => {

    // Chart labels
    const chartLabels = props.labels || [];

    // Chart data
    const chartData = chartLabels.map(() => Math.floor(Math.random() * 101));

    // data
    const data = {
        labels: chartLabels,
        datasets: [
            {
                label: '',
                data: chartData,
                backgroundColor: generateRandomColors(chartData.length),
                borderWidth: 0
            },
        ],
    };

    return (
        <div className="doughnut-chart flex items-center w-full max-lg:px-10 max-lg:pb-3">

            {props.data && props.labels && (
                <>
                    {(props?.labels.length > 1 && props.data.length > 1)
                        ?
                        <Doughnut
                            data={data}
                            options={chartOptions}
                            className='lg:w-[250px] w-full'
                        />
                        :
                        <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No data to be shown here.</h1>
                    }
                </>
            )}

            {!(props.data && props.labels) && (
                <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No data provided.</h1>
            )}
        </div>
    );
}

export default DoughnutChart


{/* <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No data to be shown here..</h1> */ }