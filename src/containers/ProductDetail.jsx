import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {noData, removeSelectedProduct, selectedProducts} from "../redux/actions/productActions";
import {useEffect} from "react";
import {RiArrowGoBackLine} from "react-icons/ri";
import ProductDetailError from "../errors/ProductDetailError";

const ProductDetail = () => {
    const product = useSelector(state => state.product)
    const { id } = useParams();
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get(
            "https://fakestoreapi.com/products/" + id)
            .catch(err => {
                console.log(err)
            })
        if(response.data !== "")
            dispatch(selectedProducts(response.data))
        else{
            dispatch(noData())
        }
    }

    useEffect(() => {
        if(id && id !== "")
            fetchProducts()
        return() => {
            dispatch(removeSelectedProduct())
        }
    }, [id]);

    console.log(product)
    return(
        <div className="productDetailContainer">
            {Object.keys(product).length === 0 ? (
                <div className="loading">LOADING...</div>
            ) : product.title === "no data" ? (<ProductDetailError/>) :(
            <div className="productDetailSegment">
                <div className="productDetailColumn">
                    <div className="productDetailMiddleRow">
                        <div className="productDetailColumnLeft">
                            <img alt={product.title} src={product.image}/>
                        </div>
                        <div className="productDetailDivider"></div>
                        <div className="productDetailColumnRight">
                            <div className="product-details-header">
                            {product.title}
                            </div>
                            <div className="product-details-price">
                                {product.price}$
                            </div>
                            <div className="product-details-description">
                                {product.description}
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={"/react-products-redux"} className="header go-back">
                    Go Back
                    <RiArrowGoBackLine  className="headerIcon"/>
                </Link>
            </div>
            )}
        </div>
    )
}
export default ProductDetail