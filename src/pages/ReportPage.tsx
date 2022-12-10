import { rootRoute } from "../AppLayout";

export const reportRoute = rootRoute.createRoute({
  path: "/report",
  component: () => {
    return <div>ReportPage</div>;
  },
});
