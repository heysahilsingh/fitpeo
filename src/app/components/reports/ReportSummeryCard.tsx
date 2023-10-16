
import { IconArrowNarrowDown, IconArrowNarrowUp, IconChartLine, IconSquareRoundedFilled } from '@tabler/icons-react';
import { useContext } from 'react';
import { UserContext } from '../../context/contexts';
import { formatAmount } from '../../utils/utils';

type ReportSummeryCardProps = {
    icon: React.FC<{ className?: string, stroke?: number }>,
    name: string,
    amount: number,
    variance: string,
    variance_period: string | "this year" | "this quarter" | "this month" | "this week" | "today",
    variance_performance: "negative" | "positive",
    iconColor?: string
}

const ReportSummeryCard = (props: ReportSummeryCardProps) => {

    const { userInfo } = useContext(UserContext);

    const iconColor = props.iconColor || "#2563EB";

    return (
        <div className="relative w-full lg:w-fit grow flex items-center justify-cent gap-4 rounded-xl overflow-hidden px-5 py-6 transition cursor-pointer hover:shadow-lg bg-white dark:bg-zinc-800">

            {/* Icon */}
            <div className="relative rounded-full w-24 h-auto aspect-square">
                <div className={`absolute top-0 left-0 translate-x-2/4 translate-y-2/4 w-2/4 h-2/4 z-[2]`} style={{color: iconColor}}>
                    {props.icon ?
                        <props.icon className={`w-full h-full`} stroke={1.5} />
                        :
                        <IconChartLine className={`w-full h-full`} stroke={1.5} />}
                </div>
                <div className={`absolute top-0 left-0 w-full h-full overflow-hidden z-[1] rounded-full opacity-[15%] dark:opacity-30`} style={{color: iconColor}}>
                    <IconSquareRoundedFilled className='w-full h-full scale-150' />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5 dark:text-zinc-300">
                <p className='capitalize text-xs leading-none font-bold opacity-40'>{props.name || "default"}</p>
                <p className="font-bold text-2xl leading-none">{`${userInfo.info.currency}${formatAmount(props.amount || 0, true)}`}</p>
                <div className='text-xs leading-none font-bold flex gap-0.5 items-center'>
                    {props.variance_performance === "positive"
                        ?
                        <IconArrowNarrowUp className='text-green-500' size={14} stroke={4} />
                        :
                        <IconArrowNarrowDown className='text-red-500' size={14} stroke={4} />
                    }
                    <p className='font-black'>{props.variance || "0%"}</p>
                    <p className='opacity-70 font-bold'>{props.variance_period || "this month"}</p>
                </div>
            </div>

            {/* Backdrop */}
            <div className={`absolute top-0 left-0 w-full h-full z-[1] opacity-0 dark:opacity-10`} style={{backgroundColor: iconColor}}>
            </div>
        </div>
    )
}

export default ReportSummeryCard