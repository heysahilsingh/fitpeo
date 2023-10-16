import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {generateRandomColors} from '../../utils/utils';

// Register comps
Chart.register(ArcElement);

// Chart options
const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
};

type DoughnutChartProps = {
    labels: string[],
    data: string | number[],
    dataColors?: string[],
}

const DoughnutChart = (props: DoughnutChartProps) => {

    // Chart labels
    const chartLabels = props.labels || ["", "", ""];

    // Chart data
    const chartData = chartLabels.map(() => Math.floor(Math.random() * 101));

    // data
    const data = {
        labels: chartLabels,
        datasets: [
            {
                label: '# of Votes',
                data: chartData,
                backgroundColor: generateRandomColors(chartData.length),
                borderWidth: 0
            },
        ],
    };

    const sa = true;

    return (
        <div className="doughnut-chart flex items-center w-full max-lg:px-10 max-lg:pb-3">
            {sa
                ?
                <Doughnut
                    data={data}
                    options={chartOptions}
                    className='lg:w-[250px] w-full'
                />
                :
                <h1 className='leading-[120%] text-center text-xl w-full opacity-50'>No data to be shown here..</h1>
            }
        </div>
    );
}

export default DoughnutChart