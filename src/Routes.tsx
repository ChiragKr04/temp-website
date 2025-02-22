import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Home1Page from "./pages/Home1";
import New from "./pages/New/New";
import LawFirmLanding from "./pages/New2/New2";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "home1", element: <Home1Page /> },
    { path: "new", element: <New /> },
    { path: "new2", element: <LawFirmLanding /> },
  ]);

  return element;
};

export default ProjectRoutes;
