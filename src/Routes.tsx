import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";

const AppRoutes = [
    {
        index: true,
        element: (
            <Layout>
                <Home />
            </Layout>
        )
    },
    {
        path: '/login',
        element: <Login />
    }
];

export default AppRoutes;