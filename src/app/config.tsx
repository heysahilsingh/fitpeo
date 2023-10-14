import { IconAdCircle, IconChartBar, IconCube, IconMessageChatbot, IconUserSquareRounded, IconWallet } from '@tabler/icons-react';
import { PageCustomers, PageHelp, PageIncome, PageOverview, PageProduct, PagePromote } from './pages/pages';

export const routePaths = {
    overview: "/overview",
    products: "/products",
    customers: "/customers",
    income: "/income",
    promote: "/promote",
    help: "/help",
}

export const routes = [
    {
        name: "Overview",
        path: routePaths.overview,
        icon: <IconChartBar />,
        page: <PageOverview />
    },
    {
        name: "Products",
        path: routePaths.products,
        icon: <IconCube />,
        page: <PageProduct />
    },
    {
        name: "Customers",
        path: routePaths.customers,
        icon: <IconUserSquareRounded />,
        page: <PageCustomers />
    },
    {
        name: "Income",
        path: routePaths.income,
        icon: <IconWallet />,
        page: <PageIncome />
    },
    {
        name: "Promote",
        path: routePaths.promote,
        icon: <IconAdCircle />,
        page: <PagePromote />
    },
    {
        name: "Help",
        path: routePaths.help,
        icon: <IconMessageChatbot />,
        page: <PageHelp />
    },
]