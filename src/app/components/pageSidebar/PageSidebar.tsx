import { IconLayoutDashboard, IconMenuDeep, IconX } from '@tabler/icons-react';
import UserAction from './UserAction';
import Navigation from './Navigation';
import { useClickOutside, useDevice } from './../../hooks/hooks';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';


const PageSidebar = () => {
    const device = useDevice();

    // Current URL
    const url = useLocation();
    const currentPageUrl = url.pathname;

    const navigationRef = useRef(null);
    const [showNavigation, setShowNavigation] = useState(false);

    // Set the showUserSetting state to false if clicked outside the userSettingRef.
    useClickOutside([navigationRef], () => setShowNavigation(false));

    return (
        <div className="page-sidebar flex fixed top-0 left-0 w-full h-fit border-b lg:border-0 dark:border-neutral-800 bg-white dark:bg-neutral-950 dark:text-slate-200 px-2 py-3 text-neutral-900 lg:dark:text-white lg:dark:bg-[#040440] lg:relative lg:flex-col lg:w-[20%] lg:bg-[#040440] lg:h-full lg:text-white z-50">
            {/* Heading */}
            <div className="dashboard-heading w-full flex justify-between items-center lg:mb-8 lg:pr-4 lg:pl-5 lg:pt-6">
                <div className="wrapper flex items-center gap-2">
                    <IconLayoutDashboard className='text-2xl min-w-[1.5rem]' stroke={1.3} size={device.isDesk ? 25 : 36} />
                    <div className="flex flex-col gap-0.5">
                        <h1 className='capitalize text-xl lg:text-2xl font-semibold leading-none'>Dashboard</h1>
                        {!device.isDesk && <p className='text-xs leading-none capitalize opacity-50'>{currentPageUrl.substring(1)}</p>}
                    </div>
                </div>

                {/* Menu Icon */}
                {!device.isDesk && (
                    showNavigation
                        ?
                        <IconX size={30} stroke={1.5} onClick={() => setShowNavigation(prev => !prev)} />
                        :
                        <IconMenuDeep size={30} stroke={1.5} onClick={() => setShowNavigation(prev => !prev)} />
                )}
            </div>

            {/* Navigatoin and User settig */}
            <div ref={navigationRef} className={`grow h-full lg:h-[200px] transition duration-500 flex flex-col gap-5 p-6 pt-20 lg:px-4 lg:pt-6 lg:pb-8 bg-[#040440] text-white ${device.isDesk ? "" : "fixed left-[0%] top-0 w-[75%] shadow-2xl -translate-x-[150%]"} ${showNavigation ? "!translate-x-[0%]" : ""}`}>
                <Navigation onSelect={() => !device.isDesk && setShowNavigation(false)} />
                <UserAction />
            </div>
        </div>
    )
}

export default PageSidebar