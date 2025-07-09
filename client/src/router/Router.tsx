import {RouterProvider} from "react-router";
import {appRoutes} from "./Routes.tsx";
import type {ReactNode} from "react";

export default function Router(): ReactNode {
    return (
            <RouterProvider router={appRoutes}/>
    )
}