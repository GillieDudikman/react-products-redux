import {RiArrowGoBackLine} from "react-icons/ri";
import {Link} from "react-router-dom";

const NoPage = () => {
    return(
        <div className="error-page">
            <h1>SORRY!</h1>
            <h2>Page not found</h2>
            <div>
                <Link to={"/react-products-redux"} className="error-back">
                    Go Back
                    <RiArrowGoBackLine  className="headerIcon"/>
                </Link>

            </div>
        </div>
    )
}
export default NoPage