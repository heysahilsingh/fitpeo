import themeStyle from "../../themeStyle"
import { DoughnutChart } from "../components"

type ReportConvertedCustomersProps = {
    className?: string
}

const ReportConvertedCustomers = (props: ReportConvertedCustomersProps) => {

    const APIData = [
        "New customers",
        "Old Customers",
        "Returning customers"
    ]

    const APIData_Value = APIData.map(() => Math.floor(Math.random() * 99999))

    const APIData_Value_Addition = APIData_Value.reduce((acc, el) => acc + el, 0);

    const newCustomersPercentage = Math.floor((APIData_Value[0] * 100) / APIData_Value_Addition);

    return (
        <div className={`flex flex-col gap-6 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden h-auto px-4 py-6 lg:py-4 lg:px-8 ${props.className || ""}`}>
            <div className="header flex flex-col leading-none gap-2">
                <h1 className={themeStyle.H1_STYLE}>Customers</h1>
                <p className="text-xs opacity-50 font-semibold">Customers who buy products.</p>
            </div>
            <div className="charts flex h-full w-full min-w-fit">
                <DoughnutChart
                    categories={APIData}
                    categoriesValue={APIData_Value}
                    showTooltip={true}
                    tooltipBodyValueSuffix=" customers"
                    categoriesColor={["#F33A9B", "#5C35EA", "rgba(138 180 248 / 0.2)"]}

                    content={
                        <div className="flex flex-col items-center justify-center w-full h-full gap-1">
                            <div className="w-4 h-2 rounded-full bg-[#F33A9B]"></div>
                            <p className="font-black leading-none text-[2rem]">{newCustomersPercentage}%</p>
                            <p className="font-bold opacity-70 leading-[100%]">Total new customers</p>
                        </div>
                    }
                />
            </div>
        </div>
    )
}

export default ReportConvertedCustomers