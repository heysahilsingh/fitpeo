import { useContext, useState } from "react"
import constants from "../../constants"
import themeStyle from "../../themeStyle"
import { BarChart, DropdownSelector } from "../components"
import { UserContext } from "../../context/contexts"
import shuffleArray from "../../utils/shuffleArray"

type ReportEarningOverviewProps = {
    className?: string
}

const ReportEarningOverview = (props: ReportEarningOverviewProps) => {

    const { userInfo } = useContext(UserContext);

    const [APIData, setAPIData] = useState([
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]);

    return (
        <div className={`flex flex-col gap-6 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden overflow-y-auto h-auto px-4 py-6 lg:py-4 lg:px-8 ${props.className || ""}`}>
            <div className="header flex items-center justify-between gap-4">
                <p className={`${themeStyle.H1_STYLE}`}>Earning Overview</p>
                <DropdownSelector
                    options={constants.filterByPeriodOptions}
                    onSelect={() => setAPIData(shuffleArray([...APIData]))}
                    defaultSelectedOption={constants.filterByPeriodOptions[3]}
                />
            </div>
            <div className="charts flex w-full overflow-x-auto">
                <BarChart
                    categories={APIData}
                    categoriesValue={APIData.map(() => Math.floor(Math.random() * (100001 * Math.random())))}
                    showTooltip={true}
                    tooltipBodyLabel="Earning:"
                    tooltipBodyValuePrefix={userInfo.info.currency}
                />
            </div>
        </div>
    )
}

export default ReportEarningOverview