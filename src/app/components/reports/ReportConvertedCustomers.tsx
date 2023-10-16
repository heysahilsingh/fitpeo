import { DoughnutChart } from "../components"

type ReportConvertedCustomersProps = {
    className?: string
}

const ReportConvertedCustomers = (props: ReportConvertedCustomersProps) => {
    return (
        <div className={`flex flex-col bg-white dark:bg-zinc-900 rounded-xl overflow-hidden h-auto px-4 py-6 lg:py-4 lg:px-8 ${props.className || ""}`}>
            <h1>ReportConvertedCustomers</h1>
            <DoughnutChart />
        </div>
    )
}

export default ReportConvertedCustomers