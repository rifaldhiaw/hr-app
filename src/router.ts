import { createRouteConfig } from "@tanstack/react-router";
import { AccountPage } from "./pages/AccountPage";
import { AppLayout } from "./pages/AppLayout";
import { EmployeePage } from "./pages/EmployeePage";
import { HiringPage } from "./pages/HiringPage";
import { HomePage } from "./pages/HomePage";
import { ReportPage } from "./pages/ReportPage";

export const rootRoute = createRouteConfig({
  component: AppLayout,
});

export const homeRoute = rootRoute.createRoute({
  path: "/",
  component: HomePage,
});

export const employeeRoute = rootRoute.createRoute({
  path: "/employee",
  component: EmployeePage,
});

export const hiringRoute = rootRoute.createRoute({
  path: "/hiring",
  component: HiringPage,
});

export const reportRoute = rootRoute.createRoute({
  path: "/report",
  component: ReportPage,
});

export const accountRoute = rootRoute.createRoute({
  path: "/account",
  component: AccountPage,
});

export const routeConfig = rootRoute.addChildren([
  homeRoute,
  employeeRoute,
  hiringRoute,
  reportRoute,
  accountRoute,
]);
