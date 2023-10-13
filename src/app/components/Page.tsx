import { ReactNode } from "react"

type PageProps = {
    children: ReactNode,
    name: string
}

const Page = (props: PageProps) => {
    return (
        <div className={`${props.name || ''} page p-4 lg:p-4`}>
            {props.children}
        </div>
    )
}

export default Page