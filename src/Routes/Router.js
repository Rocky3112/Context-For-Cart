import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Home/Main";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    }
]);