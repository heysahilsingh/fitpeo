import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/contexts";
import { Page, PageShimmer, ReportProductSell, ReportSummaryCard, SearchInput } from "../../components/components";
import { IconBuildingStore, IconClipboardList, IconCoins, IconWallet } from "@tabler/icons-react";

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
                        <div className="search-page flex flex-col-reverse lg:flex-row gap-4 lg:items-center justify-between">
                            <p className=" text-left text-xl font-semibold">Hello, {userInfo.info.name} 👋🏻</p>
                            <div className="max-lg:bg-white max-lg:dark:bg-neutral-950 max-lg:p-2 max-lg:-m-4 max-lg:mb-0">
                                <SearchInput
                                showSearchIcon={true} className="max-lg:bg-zinc-100 w-full max-lg:border-0 lg:w-[250px]"
                                searchCallback={() => console.log("")}
                                />
                            </div>
                        </div>

                        {/* report summary */}
                        <div className="flex flex-wrap flex-col lg:flex-row gap-4 lg:gap-8">
                            <ReportSummaryCard
                                name="earning"
                                icon={IconCoins}
                                iconColor="green-600"
                                amount={8946206}
                                variance="20%"
                                variance_performance="positive"
                                variance_period="this year"
                            />

                            <ReportSummaryCard
                                name="orders"
                                icon={IconClipboardList}
                                iconColor="purple-600"
                                amount={65482}
                                variance="50%"
                                variance_performance="positive"
                                variance_period="this month"
                            />

                            <ReportSummaryCard
                                name="balance"
                                icon={IconWallet}
                                iconColor="blue-600"
                                amount={65221544985452}
                                variance="20%"
                                variance_performance="negative"
                                variance_period="this quarter"
                            />

                            <ReportSummaryCard
                                name="total sales"
                                icon={IconBuildingStore}
                                iconColor="rose-500"
                                amount={98654110540}
                                variance="252%"
                                variance_performance="negative"
                                variance_period="this week"
                            />
                        </div>

                        {/* Product sell */}
                        <ReportProductSell />
                    </div>
                )}
            </div>
        </Page>
    )
}

export default PageOverview