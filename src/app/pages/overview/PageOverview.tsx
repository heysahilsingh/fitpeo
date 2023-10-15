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
                        <div className="search-page flex gap-4 items-center justify-between">
                            <p>Hello, {userInfo.info.name} 👋🏻</p>
                            <SearchInput showSearchIcon={true} className="w-[250px]" />
                        </div>

                        {/* report summary */}
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
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

                        {/* Product sold */}
                        <ReportProductSell />
                    </div>
                )}
            </div>
        </Page>
    )
}

export default PageOverview