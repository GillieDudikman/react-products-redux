import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import Layout from "./containers/Layout";
import ErrorProducts from "./errors/ErrorProducts";
import ProductDetailError from "./errors/ProductDetailError";
import NoPage from "./errors/NoPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="react-products-redux" element={<Layout/>}>
            <Route index element={<ProductListing/>} errorElement={<ErrorProducts/>}/>
            <Route path=":id" element={<ProductDetail/>} errorElement={<ProductDetailError/>} />
            <Route path="*" element={<NoPage/>}/>
        </Route>
    )
)

const App = () => {
    return(
        <RouterProvider router={router}/>
    )
}

export default App;
