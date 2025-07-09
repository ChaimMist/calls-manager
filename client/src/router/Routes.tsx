import {createBrowserRouter} from "react-router";
import AdminPage from "../pages/admin/AdminPage.tsx";
import UserPage from "../pages/user/UserPage.tsx";

export const AppRouter = createBrowserRouter([
    {path: "admin", element: <AdminPage/>},
    {path: "user", element: <UserPage/>},
    {path: "*", element: <div>ERROR 404 <br/>Page not found</div>},
]);