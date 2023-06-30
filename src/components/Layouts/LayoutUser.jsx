/* eslint-disable react/prop-types */
import Navbar from "../Navbar"
import Footer from "../Footer"

const LayoutUser = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Navbar></Navbar>
            <div className="mb-auto">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LayoutUser