import React from 'react'
import csvjson from "../data/csvjson";
//import ProductsList from "../data/ProductsList";
const ProductListing = () => {
    const listItemsOther = csvjson.map((item) =>
    <div className="card" key={item.id}>
       
        <div className="card_header">
        <div className="card_img">
            <img src={item.image_link} />
        </div>
            <h2>{item.title}</h2>
            <p>{item.color}</p>
            <p className="price">₹{item.sale_price>0 ? item.sale_price : item.price}</p>
            <div className="btn">Add to cart</div>
        </div>
    </div>
);
    return (
        <div className="main_content">
            
            {listItemsOther}
        </div>
    )
}
export default ProductListing;
