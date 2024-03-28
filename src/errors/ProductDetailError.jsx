import {RiArrowGoBackLine} from "react-icons/ri";
import {Link} from "react-router-dom";

const ProductDetailError = () => {
    return(
        <div className="error-page">
            <h1>Product not exist in our system</h1>
            <div>
                <Link to={"/react-products-redux"} className="error-back">
                    Go Back
                    <RiArrowGoBackLine  className="headerIcon"/>
                </Link>
            </div>
        </div>
    )
}
export default ProductDetailError