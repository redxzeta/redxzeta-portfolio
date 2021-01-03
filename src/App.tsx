import { Fragment } from "react";
import Footer from "./pages/footer/Footer";
import { LandingPage } from "./pages/landingpage/LandingPage";

const App: React.FC = () => {
  return (
    <Fragment>
      <LandingPage />

      <Footer />
    </Fragment>
  );
};

export default App;
