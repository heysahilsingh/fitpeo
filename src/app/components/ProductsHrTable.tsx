
type ProductsHrTableProps = {
    className?: string
}

const ProductsHrTable = (props: ProductsHrTableProps) => {
    return (
        <div className={`flex flex-col ${props.className || ""}`}>
            <table>
                <thead>
                    <tr>
                        <th>One</th>
                        <th>Two</th>
                        <th>Three</th>
                        <th>Four</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>data1</td>
                        <td>data2</td>
                    </tr>
                </tbody>
            </table>

            {/* <div className="flex flex-col gap-6 justify-between">
                <div className="flex justify-between gap-4">
                    <div className="h-7 min-w-[80%] lg:min-w-[50%] grow rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                    <div className="h-7 min-w-[12%] lg:min-w-[8%] rounded-xl shimmer-bg"></div>
                </div>
            </div> */}
        </div>
    )
}



export const ProductsHrTableShimmer = () => {
    return (
        <div className="flex flex-col gap-6 justify-between w-full">
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
    )
}

export default ProductsHrTable