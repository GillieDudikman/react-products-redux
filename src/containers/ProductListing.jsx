import {useDispatch, useSelector} from "react-redux";
import Product from "./Product";
import {useEffect} from "react";
import axios from "axios";
import {setProducts} from "../redux/actions/productActions";

const ProductListing = () => {
    const products = useSelector(state => state.allProducts.products)
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
        <div>
           <Product/>
        </div>
    )
}
export default ProductListing