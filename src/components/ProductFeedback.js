import React from 'react';

const ProductFeedback = ({feedback}) => {

    function formatDate(date) {
        return (
            <div>123</div>
        )
    }

    return (
        <div>
            <div className="feedback">
                {feedback.map((x, index) =>
                    <div className="oneComment" key={index}>
                        <div className="grow1 d-flex column a-center">
                            <div>{x.name}</div>
                            <div>{x.country}</div>
                        </div>
                        <div className="grow8 d-flex column gap-20">
                            <div className="grow1">
                                <div className="d-flex starRating">
                                    {[...Array(x.rating)].map((x, i) =><img key={i} src="https://dejpknyizje2n.cloudfront.net/marketplace/products/gold-star-badge-sticker-1623284854.751887.png" alt=""/>)}
                                    {[...Array(5 - x.rating)].map((x, i) => <img key={i} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/471px-Star_empty.svg.png" alt=""/>)}
                                </div>

                                <div>{x.content}</div>
                                <div className="font-gray">{x.date}</div>
                            </div>
                            <div className="grow1 d-flex gap-20 commentImg">
                                {x.photos.length > 0 && x.photos.map((photo, index) =>
                                    <div key={index}>
                                        <img src={photo} alt=""/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
};

export default ProductFeedback;