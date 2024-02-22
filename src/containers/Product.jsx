import {useSelector} from "react-redux";

const Product = () => {
    const products = useSelector(state => state.allProducts.products);

    const list = products.map(product => {
        return(
            <div className="product-main" key={product.id}>
                <div className="link-cards">
                    <div className="card">
                        <div className="product-img">
                            <img alt={product.title} src={product.image}/>
                        </div>
                        <div className="product-content">
                            <div className="product-header">{product.title}</div>
                            <div className="product-price">{product.price}$</div>
                            <div className="product-category">{product.category}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return list
}
export default Product