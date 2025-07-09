import {createBrowserRouter} from "react-router";
import AdminPage from "../pages/admin/AdminPage.tsx";
import UserPage from "../pages/user/UserPage.tsx";
import BaseLayout from "../layout/BaseLayout.tsx";

export const appRoutes = createBrowserRouter([
    {
        Component: BaseLayout, children: [{path: "/", element: <UserPage/>},
            {path: "admin", element: <AdminPage/>},
            {path: "user", element: <UserPage/>},
            {path: "*", element: <div>ERROR 404 <br/>Page not found</div>}
        ]
    }

]);