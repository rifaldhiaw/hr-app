import { useMatch } from "@tanstack/react-router";
import { FC } from "react";
import { Employee } from "../types/employeeType";
import { formatDate, getEmployeeAvatarUrl, pb } from "../utils";
import { employeeRoute } from "./EmployeePage";

export const employeeListRoute = employeeRoute.createRoute({
  path: "/",
  loader: async () => {
    const employeePagenated = await pb
      .collection("employees")
      .getList<Employee>(1, 100);

    return { employeePagenated };
  },
  component: () => {
    const { loaderData } = useMatch(employeeListRoute.id);

    return (
      <div className="flex gap-8 flex-wrap content-center justify-center items-end">
        {loaderData.employeePagenated.items.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    );
  },
});

const EmployeeCard: FC<{ employee: Employee }> = ({ employee }) => {
  const { loaderData } = useMatch(employeeListRoute.id);

  const department = loaderData.departments.find(
    (department) => department.id === employee.departmentId
  );

  const makeRow = (label: string, value: string) => (
    <tr className="text-slate-500">
      <td className="pb-1 pr-4 font-semibold">{label}</td>
      <td>{value}</td>
    </tr>
  );

  return (
    <div className="card w-72 bg-base-100 shadow-xl">
      <figure className="mx-auto w-32 h-32 mt-5 rounded-full border border-solid border-slate-400">
        <img
          src={getEmployeeAvatarUrl({
            id: employee.id,
            avatar: employee.avatar,
          })}
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title my-2">{employee.name}</h2>
        <table className="text-left">
          <tbody>
            {makeRow("ID", employee.id)}
            {makeRow("Department", department?.name ?? "")}
            {makeRow("Join Date", formatDate(employee.joinDate))}
            {makeRow("Phone", employee.phoneNumber)}
          </tbody>
        </table>
      </div>
    </div>
  );
};
