import { rootRoute } from "../AppLayout";

export const hiringRoute = rootRoute.createRoute({
  path: "/hiring",
  component: () => {
    return <div>HiringPage 2</div>;
  },
});
