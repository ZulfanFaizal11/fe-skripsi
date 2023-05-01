import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <div style={{ backgroundColor: 'red' }}>This navbar ges</div>
            <Outlet />
        </>
    )
}

export default Layout