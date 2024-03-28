import {RiArrowGoBackLine} from "react-icons/ri";
import {Link} from "react-router-dom";

const ErrorProducts = () => {
    return(
        <div className="error-page">
            <h1>Products failed to upload</h1>
            <h2>Please try again later</h2>
            <div>
                <Link to={"/react-products-redux"} className="error-back">
                    Go Back
                    <RiArrowGoBackLine  className="headerIcon"/>
                </Link>
            </div>
        </div>
    )
}
export default ErrorProducts