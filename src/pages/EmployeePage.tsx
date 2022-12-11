import { Outlet, useMatch } from "@tanstack/react-router";
import { rootRoute } from "../AppLayout";
import { employeeAddRoute } from "./EmployeeAddPage";

export const employeeRoute = rootRoute.createRoute({
  path: "/employee",
  component: () => {
    const { Link } = useMatch(employeeRoute.id);

    return (
      <div className="flex flex-col items-stretch">
        <div className="flex items-center gap-3">
          <Link className="btn btn-square btn-ghost" to={employeeAddRoute.id}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
            >
              <path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z" />
            </svg>
          </Link>
          <h2 className="font-semibold text-xl">Employee</h2>
        </div>

        <div className="divider"></div>

        <Outlet />
      </div>
    );
  },
});
