import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages";
import DashboardLayout from "./pages/DashboardLayout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
