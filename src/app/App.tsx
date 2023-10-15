import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/providers"
import { PageCustomers, PageOverview, PageHelp, PageIncome, PageProduct, PagePromote } from "./pages/pages"
import { routePaths } from "./config.tsx";
import {PageSidebar} from "./components/components";


const App = () => {
    return (
        <UserContextProvider>
            <div className="flex w-full min-h-screen">
                <PageSidebar />
                <div className="page-content grow w-2/4"><Outlet /></div>
            </div>
        </UserContextProvider>
    )
}


export const appRoutes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Navigate to={routePaths.overview} replace />,
            },
            {
                path: routePaths.overview,
                element: <PageOverview />,
            },
            {
                path: routePaths.products,
                element: <PageProduct />,
            },
            {
                path: routePaths.customers,
                element: <PageCustomers />,
            },
            {
                path: routePaths.income,
                element: <PageIncome />,
            },
            {
                path: routePaths.promote,
                element: <PagePromote />,
            },
            {
                path: routePaths.help,
                element: <PageHelp />,
            },
        ]
    },
]);


export default App