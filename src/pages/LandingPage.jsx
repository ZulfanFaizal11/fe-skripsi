import About from "../user/components/about/About";
import Home from "../user/components/home/Home";
import Method from "../user/components/method/Method";
import Testimonial from "../user/components/testimonial/Testimonial";
import LayoutUser from "../user/layout/LayoutUser";

const LandingPage = () => {
  return (
    <LayoutUser>
      <Home></Home>
      <About></About>
      <Method></Method>
      <Testimonial></Testimonial>
    </LayoutUser>
  );
};

export default LandingPage;
