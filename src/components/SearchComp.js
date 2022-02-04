import React, {useContext, useRef, useState} from 'react';
import Spinner from "./spinner";
import {useNavigate} from "react-router-dom";
import {MyContext} from "../contexts/MyContext";

const SearchComp = () => {

    const [getShowSpinner, setShowSpinner] = useState(false);
    const [getMessage, setMessage] = useState(null);
    const {setProduct} = useContext(MyContext)
    const productID = useRef();
    const navigate = useNavigate();

    function searchProduct() {
        if (productID.current.value.length > 0) {
            setMessage(null);
            setShowSpinner(true);
            const id = productID.current.value;
            fetch(`http://localhost:4005/search/${id}`)
                .then(res => res.json())
                .then(data => {
                    setProduct({...data.scraperInfo});
                })
                .then(() => {
                    setShowSpinner(false);
                    navigate(`/product/${id}`)
                })
        } else {
            setMessage("Please provide item ID")
        }
    }

    return (
        <div>
            <div className="searchDiv d-flex column a-center gap-20">
                <input type="text" ref={productID}/>
                <div className="searchButtonDiv">
                    <button onClick={searchProduct}>Search</button>
                </div>
            </div>

            {getShowSpinner &&
            <div>
                <Spinner/>
            </div>}
            {getMessage &&
            <div>
                {getMessage}
            </div>
            }

        </div>

    );
};

export default SearchComp;