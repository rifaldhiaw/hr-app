import { Link, Outlet, useRouter } from "@tanstack/react-router";
import { pb } from "../utils";

export const AppPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-stretch bg-slate-100 h-16 px-20">
        <nav className="flex items-center">
          <Link to="/" className="font-extrabold text-xl mr-10">
            HR Go
          </Link>

          <Link
            className="h-full hover:bg-slate-200 flex items-center px-4"
            to="/app"
          >
            Dashboard
          </Link>
          <Link
            className="h-full hover:bg-slate-200 flex items-center px-4"
            to="/app/employee"
          >
            Employee
          </Link>
          <Link
            className="h-full hover:bg-slate-200 flex items-center px-4"
            to="/app/hiring"
          >
            Hiring
          </Link>
          <Link
            className="h-full hover:bg-slate-200 flex items-center px-4"
            to={"/app/report"}
          >
            Report
          </Link>
        </nav>

        <div className="flex-1"></div>

        <div className="relative rounded-full w-64 h-full flex items-center px-4 py-2 pl-8 focus-within:shadow-outline">
          <svg
            className="absolute left-12 fill-current text-gray-500 h-4 w-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-1 pl-10 pr-4 bg-white rounded-full focus:outline-none focus:shadow-outline"
          />
        </div>
        <NavAvatar />
      </header>

      <div className="flex-1 md:px-20 pt-10 pb-40 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

function NavAvatar() {
  const router = useRouter();

  return (
    <div className="dropdown dropdown-end self-center">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar btn-sm">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <Link to="/app/account">Account Setting</Link>
        </li>
        <li>
          <button
            onClick={() => {
              pb.authStore.clear();
              router.navigate({
                to: "/",
              });
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
