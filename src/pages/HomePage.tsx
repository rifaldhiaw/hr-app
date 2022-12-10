import { rootRoute } from "../AppLayout";

export const homeRoute = rootRoute.createRoute({
  path: "/",
  component: () => {
    return <div>Home Page</div>;
  },
});
