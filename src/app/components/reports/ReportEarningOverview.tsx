import constants from "../../constants"
import themeStyle from "../../themeStyle"
import { BarChart, DropdownSelector } from "../components"

type ReportEarningOverviewProps = {
    className?: string
}

const ReportEarningOverview = (props: ReportEarningOverviewProps) => {


    return (
        <div className={`flex flex-col gap-6 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden h-auto px-4 py-6 lg:py-4 lg:px-8 ${props.className || ""}`}>
            <div className="header flex items-center justify-between gap-4">
                <p className={`${themeStyle.H1_STYLE}`}>Earning Overview</p>
                <DropdownSelector
                    options={constants.filterByPeriodOptions}
                    onSelect={(e) => console.log(e)}
                    defaultSelectedOption={constants.filterByPeriodOptions[2]}
                />
            </div>
            <div className="charts flex w-full overflow-x-auto">
                <div className="max-lg:min-w-[150vw] w-full">
                    <BarChart
                        labels={['January', 'February', 'March', 'April', 'May', 'June', 'July, January', 'February', 'March']}
                        data={['January', 'February', 'March', 'April', 'May', 'June', 'July, January', 'February', 'March'].map(() => Math.floor(Math.random() * 101))}
                    />
                </div>
            </div>
        </div>
    )
}

export default ReportEarningOverview