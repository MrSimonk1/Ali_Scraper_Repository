import React, {useEffect, useState} from 'react';

const ProductVariants = ({variants}) => {

    console.log(variants.options);
    const [getShipping, setShipping] = useState("");
    const [getColor, setColor] = useState("");
    const [getSize, setSize] = useState("");
    //

    useEffect(() => {
        variants.options.map(x => {
            if (x.name === "Color") {
                setColor(x.values[0].displayName)
            }
            if (x.name === "Size") {
                setSize(x.values[0].displayName)
            }
            if (x.name === "Ships From") {
                setShipping(x.values[0].displayName)
            }
        })
    }, []);


    function showChoice(word) {
        if (word === "Color") {
            return (
                <div className="font-gray">{getColor}</div>
            )
        }
        if (word === "Size") {
            return (
                <div className="font-gray">{getSize}</div>
            )
        }
        if (word === "Ships From") {
            return (
                <div className="font-gray">{getShipping}</div>
            )
        }
    }

    function changeChoice(category, choice) {
        console.log(category, choice)
        if (category === "Size") {
            setSize(choice);
        }
        if (category === "Color") {
            setColor(choice)
        }
        if (category === "Ships From") {
            setShipping(choice)
        }
    }

    function styling(category, choice) {
        console.log(category, choice)
        if (category === "Color") {
            if (choice === getColor) {
                return {
                    border: "5px solid green"
                }
            }
        }
        if (category === "Size") {
            if (choice === getSize) {
                return {
                    border: "5px solid green"
                }
            }
        }
        if (category === "Ships From") {
            if (choice === getShipping) {
                return {
                    border: "5px solid green"
                }
            }
        }

    }



    return (
        <div>
            {variants.options.map((x, index) => <div key={index}>
                <div>
                    <h3 className="d-flex gap-10">
                        {x.name}: {showChoice(x.name)}
                    </h3>
                </div>
                <div className="d-flex wrap gap-20">
                    {x.values.map((y, i) => <div key={i} className="valueOfItem">
                        {Object.keys(y).includes("image") ?
                            <img style={styling(x.name, y.displayName)} onClick={() => changeChoice(x.name, y.displayName)} src={y.image} alt=""/>
                            :
                            <div style={styling(x.name, y.displayName)} onClick={() => changeChoice(x.name, y.displayName)}>{y.displayName}</div>
                        }
                    </div>)}
                </div>
            </div>)}

            
        </div>
    );
};

export default ProductVariants;