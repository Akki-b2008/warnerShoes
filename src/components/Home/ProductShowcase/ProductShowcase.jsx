import "./ProductShowcase.css";
import LeatherShoes from "../../../assets/img/Leather_Shoes.png";

const ProductShowcase = () => {
    return (
        <section className='product_showcase'>
            <div className="product_left">
                <h1>
                    WARNER AFRICAN ECLIPSE
                </h1>
                <p>$299.99</p>
            </div>
            <div className="product_center">
                <img src={LeatherShoes} alt="#" />
            </div>
            <div className="product_right">
                <h2>SELECT SIZE</h2>
                <div className="sizes">
                    <p>6</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                </div>
                <button className='add_to_cart_btn'>Add to cart</button>
            </div>
        </section>
    )
}

export default ProductShowcase