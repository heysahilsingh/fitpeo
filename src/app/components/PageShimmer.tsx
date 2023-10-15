import { ReportProductSellShimmer } from "./components"

const PageShimmer = () => {
    return (
        <div className="flex flex-col w-full h-full gap-10 overflow-hidden">
            <div className="flex w-full justify-between">
                <div className="h-12 lg:h-7 w-[100%] lg:w-[20%] rounded-xl shimmer-bg"></div>
                <div className="lg:h-7 w-[0%] lg:w-[20%] rounded-xl shimmer-bg"></div>
            </div>
            <div className="flex gap-4 lg:gap-8 justify-between">
                <div className="h-36 min-w-[30%] lg:min-w-[10%] grow shimmer-bg rounded-xl"></div>
                <div className="h-36 min-w-[30%] lg:min-w-[10%] grow shimmer-bg rounded-xl"></div>
                <div className="h-36 min-w-[30%] lg:min-w-[10%] grow shimmer-bg rounded-xl"></div>
                <div className="h-36 min-w-[30%] lg:min-w-[10%] grow shimmer-bg rounded-xl"></div>
            </div>
            <div className="flex gap-4 lg:gap-8 justify-between">
                <div className="h-60 min-w-[70%] lg:min-w-[10%] grow shimmer-bg rounded-xl"></div>
                <div className="h-60 min-w-[50%] lg:min-w-[30%] shimmer-bg rounded-xl"></div>
            </div>
            <ReportProductSellShimmer />
        </div>
    )
}

export default PageShimmer