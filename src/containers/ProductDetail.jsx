import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {removeSelectedProduct, selectedProducts} from "../redux/actions/productActions";
import {useEffect} from "react";

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
        dispatch(selectedProducts(response.data))
    }

    useEffect(() => {
        if(id && id !== "")
            fetchProducts()
        return() => {
            dispatch(removeSelectedProduct())
        }
    }, [id]);
    return(
        <div className="productDetialContainer">
            {Object.keys(product).length === 0 ? (
                <div>...LOADING...</div>
            ) : (
            <div className="productDetailSegment">
                <div className="productDetailColumn">
                    <div className="productDetailDivider">AND</div>
                    <div className="productDetailMiddleRow">
                        <div className="productDetailColumnLeft">
                            <img className="productDetailImg" src={product.image}/>
                        </div>
                        <div className="productDetailColumnRight">
                            {product.title}
                        </div>
                        <div className="productDetailPrice">
                            {product.price}$
                        </div>
                        <div className="productDetailDescription">
                            {product.description}
                        </div>
                        <div className="productDetailAnimation" tabIndex="0">
                            <div className="productDetailHiddenContent">
                                <i className="shop icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )}
        </div>
    )
}
export default ProductDetail