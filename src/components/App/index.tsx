import { createHashRouter, RouterProvider } from "react-router-dom";
import Editor from "../../pages/Editor";
import Home from "../../pages/Home";

const router = createHashRouter([
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
