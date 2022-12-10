import { createReactRouter, RouterProvider } from "@tanstack/react-router";
import { routeConfig } from "./router";

const router = createReactRouter({ routeConfig });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
