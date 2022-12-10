import { useMatch } from "@tanstack/react-router";
import { FC } from "react";
import { rootRoute } from "../AppLayout";
import { Department } from "../types/departmentType";
import { Employee } from "../types/employeeType";
import { formatDate, getEmployeeAvatarUrl, pb } from "../utils";

export const employeeRoute = rootRoute.createRoute({
  path: "/employee",
  loader: async () => {
    const employeePagenated = await pb
      .collection("employees")
      .getList<Employee>(1, 100);

    const departments = await pb
      .collection("departments")
      .getFullList<Department>();

    return { employeePagenated, departments };
  },
  component: () => {
    const { loaderData } = useMatch(employeeRoute.id);

    return (
      <div className="flex gap-5 flex-wrap py-10">
        {loaderData.employeePagenated.items.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    );
  },
});

const EmployeeCard: FC<{ employee: Employee }> = ({ employee }) => {
  const { loaderData } = useMatch(employeeRoute.id);

  const department = loaderData.departments.find(
    (department) => department.id === employee.departmentId
  );

  const makeRow = (label: string, value: string) => (
    <tr>
      <td className="pb-1 pr-4 font-semibold">{label}</td>
      <td>{value}</td>
    </tr>
  );

  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="mx-20 mt-5 rounded-full border border-solid border-slate-200">
        <img
          src={getEmployeeAvatarUrl({
            id: employee.id,
            avatar: employee.avatar,
          })}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title my-2">{employee.name}</h2>
        <table className="text-left">
          <tbody>
            {makeRow("Join Date", formatDate(employee.joinDate))}
            {makeRow("Department", department?.name ?? "")}
            {makeRow("Phone", employee.phoneNumber)}
          </tbody>
        </table>
      </div>
    </div>
  );
};
