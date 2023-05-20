import About from "../user/components/about/About";
import Home from "../user/components/home/Home";
import LayoutUser from "../user/layout/LayoutUser";

const LandingPage = () => {
  return (
    <LayoutUser>
      <Home></Home>
      <About></About>
    </LayoutUser>
  );
};

export default LandingPage;
