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
            <div className="flex flex-col rounded-xl border border-zinc-300 dark:border-zinc-700">
                <div className="p-4 flex justify-between">
                    <div className="h-7 w-[50%] lg:w-[20%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 w-[10%] lg:w-[20%] rounded-xl shimmer-bg"></div>
                </div>
                <hr className="mx-4 border-0 border-b-[1px] border-zinc-300 dark:border-zinc-700" />
                <div className="p-4 flex flex-col gap-6 justify-between">
                    <div className="flex justify-between gap-4">
                        <div className="h-7 min-w-[80%] lg:min-w-[50%] grow rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="h-7 min-w-[80%] lg:min-w-[50%] grow rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="h-7 min-w-[80%] lg:min-w-[50%] grow rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="h-7 min-w-[80%] lg:min-w-[50%] grow rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    </div>
                    <div className="flex justify-between gap-4">
                        <div className="h-7 min-w-[80%] lg:min-w-[50%] grow rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                        <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageShimmer