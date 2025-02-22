import { useRoutes } from "react-router-dom";
import Home1Page from "./pages/Home1";
import New from "./pages/New/New";
import LawFirmLanding from "./pages/New2/New2";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <LawFirmLanding /> },
    { path: "*", element: <LawFirmLanding /> },
    { path: "home1", element: <Home1Page /> },
    { path: "new", element: <New /> },
    { path: "new2", element: <LawFirmLanding /> },
  ]);

  return element;
};

export default ProjectRoutes;
