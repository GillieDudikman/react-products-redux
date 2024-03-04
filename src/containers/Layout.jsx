import {Link, Outlet} from "react-router-dom";
import { PiButterfly } from "react-icons/pi";


const Layout = () => {
    return(
        <div className="menu">
            <div>
                <Link className="header" to={""}>Shopling
                    <PiButterfly className="headerIcon"/>
                </Link>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
        </div>
    )
}
export default Layout