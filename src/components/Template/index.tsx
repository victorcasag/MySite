
import {Outlet} from 'react-router-dom'
export default function Template() {
    return (
        <div className="container bg-light">
            <Outlet />
        </div>
    )
}