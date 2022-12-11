import { createReactRouter, RouterProvider } from "@tanstack/react-router";
import React from "react";
import { rootRoute } from "./AppLayout";
import { accountRoute } from "./pages/AccountPage";
import { employeeAddRoute } from "./pages/EmployeeAddPage";
import { employeeListRoute } from "./pages/EmployeeListPage";
import { employeeRoute } from "./pages/EmployeePage";
import { hiringRoute } from "./pages/HiringPage";
import { homeRoute } from "./pages/HomePage";
import { reportRoute } from "./pages/ReportPage";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/react-router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const routeConfig = rootRoute.addChildren([
  employeeRoute.addChildren([employeeListRoute, employeeAddRoute]),
  homeRoute,
  hiringRoute,
  reportRoute,
  accountRoute,
]);

const router = createReactRouter({ routeConfig });

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </>
  );
}

export default App;
