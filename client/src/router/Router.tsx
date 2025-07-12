import {RouterProvider} from "react-router";
import {appRoutes} from "./Routes.tsx";
import type {JSX} from "react";
import { TagsProvider } from '../contexts/tagsContext.tsx';

export default function Router(): JSX.Element {
    return (
          <TagsProvider>
              <RouterProvider router={appRoutes}/>
          </TagsProvider>
    )
}