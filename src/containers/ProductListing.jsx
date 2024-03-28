import {useDispatch} from "react-redux";
import Product from "./Product";
import {useEffect} from "react";
import axios from "axios";
import {setProducts} from "../redux/actions/productActions";

const ProductListing = () => {
    const dispatch = useDispatch()

    const fetching = async () => {
        const res = await axios.get('https://fakestoreapi.com/products')
            .catch(err => {
                console.log("Error", err)
            })
        dispatch(setProducts(res.data))
    }

    useEffect(() => {
        fetching()
    }, []);

    return(
        <div className="product-container">
           <Product/>
        </div>
    )
}
export default ProductListing