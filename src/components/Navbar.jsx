import { useState } from "react";
import logo from "../assets/img/logo.png";
import { FaHamburger } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className={`border-b-2 sm:px-24 p-6 flex ${location.pathname !== "/login" ? "justify-between" : "justify-center"} items-center text-lg`}>
      <img src={logo} alt="Logo" width={125} className="cursor-pointer" onClick={() => navigate("/")} />
      {location.pathname !== "/login" && (
        <div>
          {isTabletOrMobile && (
            <button className="md:hidden" onClick={() => setNavbarOpen(navbarOpen ? false : true)}>
              <FaHamburger />
            </button>
          )}
          {!isTabletOrMobile || navbarOpen ? (
            <ul className={isTabletOrMobile ? "gap-4" : "flex gap-4 items-center"}>
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Booking</li>
              <li className="cursor-pointer">Cara Booking</li>
              <li className="cursor-pointer">Kontak</li>
              <li className="border-2 p-2 bg-white rounded-md cursor-pointer" onClick={() => navigate("/login")}>
                Masuk
              </li>
              <li className="bg-[#FF5B24] text-white p-2 rounded-md cursor-pointer" onClick={() => navigate("/register")}>
                Daftar
              </li>
            </ul>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Navbar;
