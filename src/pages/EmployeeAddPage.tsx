import { employeeRoute } from "./EmployeePage";

export const employeeAddRoute = employeeRoute.createRoute({
  path: "/add",
  component: () => {
    return <div className="flex flex-col items-stretch">add</div>;
  },
});
