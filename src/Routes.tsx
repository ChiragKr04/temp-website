import { useRoutes } from "react-router-dom";
import LawFirmLanding from "./pages/LawFirmLanding/LawFirmLanding";
import PrivacyPolicy from "./pages/LawFirmLanding/components/PrivacyPolicy";
import CookiesPolicy from "./pages/LawFirmLanding/components/CookiesPolicy";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <LawFirmLanding /> },
    { path: "*", element: <LawFirmLanding /> },
    { path: "/privacy-policy", element: <PrivacyPolicy /> },
    { path: "/cookies-policy", element: <CookiesPolicy /> },
  ]);

  return element;
};

export default ProjectRoutes;
