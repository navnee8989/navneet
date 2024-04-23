import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import Loader from "./component/Loader";
import { useEffect, useState } from "react";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    
  },
],
{
  basename: '/navneet'
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isLoadingTrue = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(isLoadingTrue);
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : <RouterProvider router={router} />}
    </>
  );
};

export default App;