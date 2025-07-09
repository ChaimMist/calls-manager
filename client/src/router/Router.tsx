import {RouterProvider} from "react-router";
import {appRoutes} from "./Routes.tsx";
import type {JSX} from "react";

export default function Router(): JSX.Element {
    return (
            <RouterProvider router={appRoutes}/>
    )
}