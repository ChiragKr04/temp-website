import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes />
      </Router>
    </HelmetProvider>
  );
}
export default App;
