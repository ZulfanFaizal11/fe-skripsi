import logo from '../assets/img/logo.png'

const Navbar = () => {
    return (
        <div className="bg-[#F7F9FA] sm:px-24 p-4 flex justify-between items-center border-b-2 text-sm">
            <img src={logo} alt="Logo" width={100} />
            <ul className="flex gap-x-4">
                <li>Home</li>
                <li>Booking</li>
                <li>Cara Booking</li>
                <li>Kontak</li>
            </ul>
        </div>
    )
}

export default Navbar