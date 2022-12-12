import { Link, useMatch } from "@tanstack/react-router";
import { FC } from "react";
import { Employee } from "../../../types/employeeType";
import { formatDate, getEmployeeAvatarUrl } from "../../../utils";

export const EmployeeListPage = () => {
  const { loaderData } = useMatch("/app/employee/");

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 px-7 md:px-0">
        <div className="font-semibold text-xl breadcrumbs">
          <ul>
            <li>
              <Link to="/app/employee">Employee</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1"></div>
        <Link className="btn gap-2" to={"/app/employee/add"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
          >
            <path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z" />
          </svg>
          Add New
        </Link>
      </div>

      <div className="divider"></div>

      <div className="flex gap-8 flex-wrap content-center justify-center items-end">
        {loaderData.employeePagenated.items.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

const EmployeeCard: FC<{ employee: Employee }> = ({ employee }) => {
  const { loaderData } = useMatch("/app/employee/");

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
    <div className="flex card w-72 bg-base-100 shadow-xl">
      <figure className="mx-auto w-20 h-20 md:w-32 md:h-32  mt-5 rounded-full border border-solid border-slate-400">
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
        <table className="text-left text-sm md:text-md">
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
