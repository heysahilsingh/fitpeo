
import { IconChartLine, IconSquareRoundedFilled } from '@tabler/icons-react';
import { useContext } from 'react';
import { UserContext } from '../context/contexts';
import { formatAmount } from '../utils/utils';

type ReportSummaryCardProps = {
    icon: React.FC<{ className?: string, stroke?: number }>,
    name: string,
    iconColor?: string
}

const ReportSummaryCard = (props: ReportSummaryCardProps) => {

    const {userInfo} = useContext(UserContext);

    const iconColor = props.iconColor ? props.iconColor : "text-blue-600";

    return (
        <div className="w-full flex items-center justify-cent gap-4 rounded-xl overflow-hidden px-5 py-6 bg-white dark:bg-zinc-800">

            {/* Icon */}
            <div className="relative rounded-full w-24 h-auto aspect-square">
                <div className={`absolute top-0 left-0 translate-x-2/4 translate-y-2/4 w-2/4 h-2/4 z-[2] ${iconColor}`}>
                    {props.icon ?
                        <props.icon className={`w-full h-full`} stroke={1.5}/>
                        :
                        <IconChartLine className={`w-full h-full`} stroke={1.5}/>}
                </div>
                <div className={`absolute top-0 left-0 w-full h-full ${iconColor} overflow-hidden z-[1] rounded-full opacity-[15%] dark:opacity-30`}>
                    <IconSquareRoundedFilled className='w-full h-full scale-150' />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5 dark:text-zinc-300">
                <p className='capitalize text-xs leading-none font-medium opacity-40'>{props.name}</p>
                <div className="font-bold text-2xl leading-none">{`${userInfo.info.currency}${formatAmount(20452, true)}`}</div>
                <p className='text-xs leading-none font-medium'>2.3% this month</p>
            </div>
        </div>
    )
}

export default ReportSummaryCard