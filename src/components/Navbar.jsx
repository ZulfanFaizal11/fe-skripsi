import { useState } from 'react'
import logo from '../assets/img/logo.png'
import { FaHamburger } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
    return (
        <div className="bg-[#F7F9FA] sm:px-24 p-6 flex justify-between items-center text-lg">
            <img src={logo} alt="Logo" width={125} />
            <div>
                {isTabletOrMobile && <button className="md:hidden" onClick={() => setNavbarOpen(navbarOpen ? false : true)}><FaHamburger /></button>}
                {!isTabletOrMobile || navbarOpen ?
                    <ul className={isTabletOrMobile ? 'gap-4' : 'flex gap-4'}>
                        <li>Home</li>
                        <li>Booking</li>
                        <li>Cara Booking</li>
                        <li>Kontak</li>
                    </ul> : null
                }
            </div>
        </div>
    )
}

export default Navbar