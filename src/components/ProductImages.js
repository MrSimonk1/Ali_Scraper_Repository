import React, {useState} from 'react';
import {FaArrowLeft} from "react-icons/fa"
import {FaArrowRight} from "react-icons/fa"

const ProductImages = ({images}) => {

    let [getImageNum, setImageNum] = useState(0);

    function changeImage(word) {
        const totalImages = images.length;

        if (word === "next") {
            if (getImageNum + 1 < totalImages) {
                setImageNum(getImageNum += 1)
            } else {
                setImageNum(0);
            }
        }
        if (word === "previous") {
            if (getImageNum - 1 >= 0) {
                setImageNum(getImageNum -= 1)
            } else {
                setImageNum(totalImages - 1);
            }
        }
    }

    return (
        <div>
            <div className="images">
                <img src={images[getImageNum]} alt=""/>
                <div className="changeImgIcons">
                    <div onClick={() => changeImage("previous")}>
                        <FaArrowLeft/>
                    </div>
                    <div onClick={() => changeImage("next")}>
                        <FaArrowRight/>
                    </div>
                </div>
            </div>
            <div className="moreImages">
                {images.map((x, index) =>
                    <div className="grow1" key={index}>
                        <img src={x} alt=""/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductImages;