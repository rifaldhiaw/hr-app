import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import { createReactRouter, RouterProvider } from "@tanstack/react-router";
import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";
import { lazy } from "react";
import { z } from "zod";
import { AccountPage } from "./pages/app/AccountPage";
import { DashboardPage } from "./pages/app/DashboardPage";
import { EmployeeAddPage } from "./pages/app/employee/EmployeeAddPage";
import { EmployeeListPage } from "./pages/app/employee/EmployeeListPage";
import { EmployeePage } from "./pages/app/EmployeePage";
import { HiringPage } from "./pages/app/HiringPage";
import { ReportPage } from "./pages/app/ReportPage";
import { AppPage } from "./pages/AppPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { rootRoute } from "./routerUtils";
import { Department } from "./types/departmentType";
import { Employee } from "./types/employeeType";
import { pb } from "./utils";

dayjs.extend(objectSupport);

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import("@tanstack/react-router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

const AuthError = new Error("Not logged in");

export const appRoute = rootRoute.createRoute({
  path: "/app",
  onLoadError: (error) => {
    if (error === AuthError) {
      router.navigate({
        to: loginRoute.id,
        // @ts-ignore
        search: {
          redirect: router.state.latestLocation.href,
        },
      });
    }
  },
  beforeLoad: () => {
    if (!pb.authStore.isValid) {
      throw AuthError;
    }
  },
  component: AppPage,
});

export const homeRoute = rootRoute.createRoute({
  id: "home",
  component: HomePage,
});

export const loginRoute = homeRoute.createRoute({
  path: "/",
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  component: LoginPage,
});

export const registerRoute = homeRoute.createRoute({
  path: "/register",
  component: RegisterPage,
});

export const dashboardRoute = appRoute.createRoute({
  path: "/",
  component: DashboardPage,
});

export const employeeRoute = appRoute.createRoute({
  path: "/employee",
  loader: async () => {
    const departments = await pb
      .collection("departments")
      .getFullList<Department>();

    return { departments };
  },
  component: EmployeePage,
});

export const employeeListRoute = employeeRoute.createRoute({
  path: "/",
  loader: async () => {
    const employeePagenated = await pb
      .collection("employees")
      .getList<Employee>(1, 100);

    return { employeePagenated };
  },
  component: EmployeeListPage,
});

export const employeeAddRoute = employeeRoute.createRoute({
  path: "/add",
  component: EmployeeAddPage,
});

export const accountRoute = appRoute.createRoute({
  path: "/account",
  component: AccountPage,
});

export const hiringRoute = appRoute.createRoute({
  path: "/hiring",
  component: HiringPage,
});

export const reportRoute = appRoute.createRoute({
  path: "/report",
  component: ReportPage,
});

export const routeConfig = rootRoute.addChildren([
  homeRoute.addChildren([loginRoute, registerRoute]),
  appRoute.addChildren([
    dashboardRoute,
    employeeRoute.addChildren([employeeListRoute, employeeAddRoute]),
    hiringRoute,
    reportRoute,
    accountRoute,
  ]),
]);

export const router = createReactRouter({ routeConfig });

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <TanStackRouterDevtools router={router} />
    </>
  );
};
