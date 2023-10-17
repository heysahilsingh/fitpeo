import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/providers"
import { PageCustomers, PageOverview, PageHelp, PageIncome, PageProduct, PagePromote } from "./pages/pages"
import { routePaths } from "./AppConfig.ts";
import { AuthProvider, PageSidebar } from "./components/components";
import { useEffect } from "react";


const App = () => {
    const themeAppearance = localStorage.getItem("themeAppearance");

    useEffect(() => {
        // Remove both classes and then add the appropriate one
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(themeAppearance === "dark" ? "dark" : "light");
    }, []);

    return (
        <UserContextProvider>
            <AuthProvider>
                <div className="flex w-full min-h-screen">
                    <PageSidebar />
                    <div className="page-content grow w-2/4"><Outlet /></div>
                </div>
            </AuthProvider>
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