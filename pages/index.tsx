import type {NextPage} from 'next'
import {useCartContext} from "../contexts/CartContext";
import {IoConstructOutline} from "react-icons/io5";

const Index: NextPage = () => {
    const {products} = useCartContext()

    console.log(products);

    return (
        <div className="w-100 home-placeholder d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex align-items-center">
                <IoConstructOutline size={35}/>
                <h1 className="ml-3">Our Home Page is coming soon....</h1>
            </div>
            <h3 className="primary">In the meantime, please visit the link given by the store owner.</h3>
        </div>
    )
}

export default Index
