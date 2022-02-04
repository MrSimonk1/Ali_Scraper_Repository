import React, {useContext, useState} from 'react';
import ProductImages from "./ProductImages";
import ProductFeedback from "./ProductFeedback";
import ProductVariants from "./ProductVariants";
import {MyContext} from "../contexts/MyContext";

const SingleProduct = () => {

    const {getProduct} = useContext(MyContext);
    const [getQuantity, setQuantity] = useState(1)
    console.log(getProduct)
    //photos, title, description, comments, price, variants
    //button to go back
    console.log(getProduct.salePrice.min);
    function fnQuantity(word) {
        if (word === "add") {
            setQuantity(getQuantity + 1);
        }
        if (word === "remove" && getQuantity !== 0) {
            setQuantity(getQuantity - 1);
        }

    }

    return (
        <div>
            {getProduct &&
            <div className="d-flex column">
                <div className="d-flex grow1">
                    <div className="grow1 d-flex j-center a-center">
                        <ProductImages images={getProduct.images}/>
                    </div>
                    <div className="grow2 d-flex column j-center">
                        <h2>{getProduct.title}</h2>
                        <div className="d-flex gap-20">
                            <div className="d-flex starRating">
                                {[...Array(getProduct.ratings.totalStar)].map((x, i) =><img key={i} src="https://dejpknyizje2n.cloudfront.net/marketplace/products/gold-star-badge-sticker-1623284854.751887.png" alt=""/>)}
                                {[...Array(5 - getProduct.ratings.totalStar)].map((x, i) => <img key={i} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/471px-Star_empty.svg.png" alt=""/>)}
                            </div>
                            <div className="weight-700">
                                {getProduct.ratings.averageStar}
                            </div>
                            <div className="weight-700">
                                {getProduct.ratings.totalStarCount} Reviews
                            </div>
                            <div className="weight-700">
                                {getProduct.orders} orders
                            </div>
                        </div>
                        <h2>
                            Price: {getProduct.salePrice.min} - {getProduct.salePrice.max} $
                        </h2>
                        <div>
                            <ProductVariants variants={getProduct.variants}/>
                        </div>
                        <div className="quantity">
                            <div>
                                Quantity:
                            </div>
                            <div className="d-flex gap-20">
                                <div className="setQuantity" onClick={() => fnQuantity("remove")}>
                                    -
                                </div>
                                <div>
                                    {getQuantity}
                                </div>
                                <div className="setQuantity" onClick={() => fnQuantity("add")}>
                                    +
                                </div>
                                <div className="font-gray">
                                    {getProduct.totalAvailableQuantity} Pieces available
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grow2">
                    <ProductFeedback feedback={getProduct.feedback}/>
                </div>
            </div>}
        </div>
    );
};

export default SingleProduct;