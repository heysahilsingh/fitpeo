import { ReactNode } from "react"

type PageProps = {
    children: ReactNode,
    name: string
}

const Page = (props: PageProps) => {
    return (
        <div className={`${props.name || ''} page w-full h-full mt-[61px] lg:mt-0 p-4 lg:px-10 lg:py-6`}>
            {props.children}
        </div>
    )
}

export default Page