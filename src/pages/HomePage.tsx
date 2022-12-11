import { Link, Outlet, useRouter } from "@tanstack/react-router";
import { pb } from "../utils";

export const HomePage = () => {
  const router = useRouter();

  const notLoggedIn = (
    <div className="flex flex-col flex-1 gap-2 mt-14">
      <div className="tabs justify-center">
        <Link
          to="/"
          className="tab tab-lg tab-lifted"
          activeProps={{
            className: "tab tab-lg tab-lifted tab-active",
          }}
        >
          Login
        </Link>
        <Link
          to="/register"
          className="tab tab-lg tab-lifted"
          activeProps={{
            className: "tab tab-lg tab-lifted tab-active",
          }}
        >
          Register
        </Link>
      </div>
      <div className="mb-10 mx-auto">
        <Outlet />
      </div>
    </div>
  );

  return (
    <div className="flex h-screen items-stretch">
      <div className="flex-1">
        <img src="/hr_go.jpg" className="w-full h-full object-cover" />
      </div>

      {/* content */}
      <div className="flex-1 justify-center px-20 overflow-y-auto">
        <h1 className="text-6xl font-extrabold mt-20 mb-5 text-center">
          HR Go
        </h1>
        <p className="text-lg text-center">Stay Orgizined, Be Productive</p>
        {pb.authStore.isValid ? (
          <div className="flex flex-col gap-2 mt-48 w-48  mx-auto">
            <Link className="btn btn-lg" to="/app">
              Go To App
            </Link>
            <button
              className="btn btn-ghost"
              onClick={() => {
                pb.authStore.clear();
                router.reload();
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          notLoggedIn
        )}
      </div>
    </div>
  );
};
