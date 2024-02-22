import {Outlet} from "react-router-dom";

const Layout = () => {
    return(
        <div className="menu">
            <div className="container">
                <h2>Shop</h2>
            </div>
            <div className="outlet">
                <Outlet/>
            </div>
        </div>
    )
}
export default Layout