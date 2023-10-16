import { NavLink, useLocation } from "react-router-dom"
import { routes } from "../../config"
import { IconChevronRight } from "@tabler/icons-react"

type NavigationProps = {
    onSelect?: () => void
}

const Navigation = (props: NavigationProps) => {

    // Current URL
    const url = useLocation();
    const currentUrl = url.pathname;

    return (
        <div className={`navigation grow overflow-y-auto no-scrollba min-h-[100px]`}>
            <ul className="flex flex-col gap-5">
                {routes.map(route => (
                    <li key={route.name}>
                        <NavLink onClick={() => props.onSelect && props.onSelect()} to={route.path} className={`${currentUrl == route.path ? "bg-[rgba(255,255,255,0.2)] opacity-100" : "opacity-50"} flex items-center transition gap-3 p-3 rounded-lg hover:opacity-100`}>
                            <i className="">{route.icon}</i>
                            <p className="max-w-full grow overflow-hidden whitespace-nowrap text-ellipsis">{route.name}</p>
                            {currentUrl !== route.path && <IconChevronRight stroke={1.5} />}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navigation