import { IconLayoutDashboard, IconMenuDeep, IconX } from '@tabler/icons-react';
import UserAction from './UserAction';
import Navigation from './Navigation';
import { useClickOutside, useDevice } from './../../hooks/hooks';
import { useRef, useState } from 'react';


const PageSidebar = () => {
    const device = useDevice();

    const navigationRef = useRef(null);
    const [showNavigation, setShowNavigation] = useState(false);

    // Set the showUserSetting state to false if clicked outside the userSettingRef.
    useClickOutside([navigationRef], () => setShowNavigation(false));

    return (
        <div className="page-sidebar flex fixed top-0 left-0 w-full h-fit bg-white border-b px-2 py-3 text-neutral-900 lg:relative lg:flex-col lg:w-[15%] lg:bg-[#040440] lg:h-full lg:text-white z-50">
            <div className="dashboard-heading w-full flex justify-between items-center lg:mb-8 lg:pr-4 lg:pl-5 lg:pt-6">
                <div className="wrapper flex items-center gap-2">
                    <IconLayoutDashboard className='text-2xl min-w-[1.5rem]' stroke={1.3} size={device.isDesk ? 25 : 36} />
                    <div className="flex flex-col">
                        <h1 className='capitalize text-xl lg:text-2xl font-semibold leading-none'>Dashboard</h1>
                        {!device.isDesk && <p className='text-xs leading-none'>Overview</p>}
                    </div>
                </div>
                {!device.isDesk && (
                    showNavigation
                        ?
                        <IconX size={30} stroke={1.5} onClick={() => setShowNavigation(prev => !prev)} />
                        :
                        <IconMenuDeep size={30} stroke={1.5} onClick={() => setShowNavigation(prev => !prev)} />
                )}
            </div>
            <div ref={navigationRef} className={`transition duration-500 flex flex-col h-full gap-5 p-6 pt-20 lg:px-4 lg:pt-6 lg:pb-8 bg-[#040440] text-white ${device.isDesk ? "" : "fixed left-[0%] top-0 w-[75%] shadow-2xl -translate-x-[150%]"} ${showNavigation ? "!translate-x-[0%]" : ""}`}>
                <Navigation />
                <UserAction />
            </div>
        </div>
    )
}

export default PageSidebar