import { Outlet } from "react-router-dom"

const LaooutAdmin = () => {
    return (
        <>
            <div style={{ backgroundColor: 'red' }}>This wrapped with layout admin ges</div>
            <Outlet />
        </>
    )
}

export default LaooutAdmin