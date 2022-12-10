import { rootRoute } from "../AppLayout";

export const accountRoute = rootRoute.createRoute({
  path: "/account",
  component: () => {
    return <div>account Page</div>;
  },
});
