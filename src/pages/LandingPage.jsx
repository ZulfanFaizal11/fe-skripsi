import About from "../user/components/about/About";
import Home from "../user/components/home/Home";
import Method from "../user/components/method/Method";
import LayoutUser from "../user/layout/LayoutUser";

const LandingPage = () => {
  return (
    <LayoutUser>
      <Home></Home>
      <About></About>
      <Method></Method>
    </LayoutUser>
  );
};

export default LandingPage;
