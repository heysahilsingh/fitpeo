import { NavLink, useLocation } from "react-router-dom"
import { routePaths } from "../../config"
import { IconAdCircle, IconChartBar, IconChevronRight, IconCube, IconMessageChatbot, IconUserSquareRounded, IconWallet } from "@tabler/icons-react"


const Navigation = () => {

    // Current URL
    const url = useLocation();
    const currentUrl = url.pathname;

    const routes = [
        {
            name: "Overview",
            path: routePaths.overview,
            icon: <IconChartBar />
        },
        {
            name: "Products",
            path: routePaths.products,
            icon: <IconCube />
        },
        {
            name: "Customers",
            path: routePaths.customers,
            icon: <IconUserSquareRounded />
        },
        {
            name: "Income",
            path: routePaths.income,
            icon: <IconWallet />
        },
        {
            name: "Promote",
            path: routePaths.promote,
            icon: <IconAdCircle />
        },
        {
            name: "Help",
            path: routePaths.help,
            icon: <IconMessageChatbot />
        },
    ]

    return (
        <div className={`navigation grow overflow-y-scroll min-h-[100px]`}>
            <ul className="flex flex-col gap-5">
                {routes.map(route => (
                    <li key={route.name}>
                        <NavLink to={route.path} className={`${currentUrl == route.path ? "bg-[rgba(255,255,255,0.2)] opacity-100" : "opacity-50"} flex items-center transition gap-3 p-3 rounded-lg hover:opacity-100`}>
                            <i className="">{route.icon}</i>
                            <p className="max-w-full grow overflow-hidden whitespace-nowrap text-ellipsis">{route.name}</p>
                            {currentUrl !== route.path && <IconChevronRight stroke={1.5}/>}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navigation