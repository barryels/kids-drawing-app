import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Editor from "../../pages/Editor";
import Home from "../../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/editor/:imageID",
    element: <Editor />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
