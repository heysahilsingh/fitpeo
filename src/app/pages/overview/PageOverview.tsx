import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/contexts";
import { Page, PageShimmer, ReportConvertedCustomers, ReportEarningOverview, ReportProductSell, ReportSummeryCard, SearchInput } from "../../components/components";
import { IconBuildingStore, IconClipboardList, IconCoins, IconWallet } from "@tabler/icons-react";

const summeryCardData = [
    {
        name: "Earning",
        icon: IconCoins,
        iconColor: "#16A34A",
        amount: 8946206,
        variance: "20%",
        variance_performance: "negative",
        variance_period: "this year",
    },
    {
        name: "orders",
        icon: IconClipboardList,
        iconColor: "#9333EA",
        amount: 65482,
        variance: "50%",
        variance_performance: "positive",
        variance_period: "this month",
    },
    {
        name: "balance",
        icon: IconWallet,
        iconColor: "#2563EB",
        amount: 65221544985452,
        variance: "37%",
        variance_performance: "positive",
        variance_period: "this year",
    },
    {
        name: "total sales",
        icon: IconBuildingStore,
        iconColor: "#F43F5E",
        amount: 98654110540,
        variance: "6%",
        variance_performance: "negative",
        variance_period: "this year",
    },
];

const PageOverview = () => {
    const [showShimmer, setShowShimmer] = useState(true);

    // User Information
    const { userInfo } = useContext(UserContext);

    useEffect(() => {
        const pageDataLoading = setTimeout(() => setShowShimmer(false), 1000);
        return () => clearTimeout(pageDataLoading);
    })

    return (
        <Page name="customers">
            <div className="flex w-full h-full">
                {showShimmer && <PageShimmer />}

                {!showShimmer && (
                    <div className="flex flex-col gap-8 w-full">
                        {/* Greeting and  Search */}
                        <div className="search-page flex max-sm:flex-col-reverse lg:flex-row gap-4 lg:items-center justify-between">
                            <p className=" text-left text-xl font-semibold">Hello, {userInfo.info.name} 👋🏻</p>
                            <div className="max-sm:bg-white max-sm:dark:bg-neutral-950 max-sm:p-2 max-sm:-m-4 max-sm:mb-0">
                                <SearchInput
                                    showSearchIcon={true} className="max-sm:bg-zinc-100 w-full max-sm:border-0 lg:w-[250px]"
                                    searchCallback={() => console.log("")}
                                />
                            </div>
                        </div>

                        {/* report summary */}
                        <div className="flex flex-wrap gap-4 lg:gap-8">
                            {summeryCardData.map(card => (
                                <ReportSummeryCard
                                    key={card.name}
                                    className="grow"
                                    name={card.name}
                                    amount={card.amount}
                                    icon={card.icon}
                                    iconColor={card.iconColor}
                                    variance={card.variance}
                                    variance_period={card.variance_period}
                                    variance_performance={card.variance_performance === "positive" ? "positive" : "negative"}
                                />
                            ))}
                        </div>

                        {/* Income overview and Converted customer reports */}
                        <div className="flex max-sm:flex-wrap gap-4 lg:gap-8 w-full">
                            <ReportEarningOverview  className="w-[50%] grow lg:w-[50%] overflow-x-auto"/>
                            <ReportConvertedCustomers className="max-sm:w-full md:w-[40%] lg:w-fit"/>
                        </div>

                        {/* Product sell Report*/}
                        <ReportProductSell />
                    </div>
                )}
            </div>
        </Page>
    )
}

export default PageOverview