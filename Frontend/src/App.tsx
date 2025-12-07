import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
