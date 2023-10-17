import themeStyle from "../../themeStyle"
import { DoughnutChart } from "../components"

type ReportConvertedCustomersProps = {
    className?: string
}

// const data = {
//     newCustomers: 45681,
//     oldCustomers: 45125,
//     returningCustomers: 1234
// }

const ReportConvertedCustomers = (props: ReportConvertedCustomersProps) => {

    const saLabel = [
        'January',
        'February',
        'March',
        'April',
        'May',
    ]

    return (
        <div className={`flex flex-col gap-6 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden h-auto px-4 py-6 lg:py-4 lg:px-8 ${props.className || ""}`}>
            <div className="header flex flex-col leading-none gap-2">
                <h1 className={themeStyle.H1_STYLE}>Customers</h1>
                <p className="text-xs opacity-50 font-semibold">Customers who buy products.</p>
            </div>
            <div className="charts flex h-full w-full min-w-fit">
                <DoughnutChart
                    labels={saLabel}
                    data={saLabel.map(() => Math.floor(Math.random() * 101))}
                    dataColors={["#000000"]}
                />
            </div>
        </div>
    )
}

export default ReportConvertedCustomers