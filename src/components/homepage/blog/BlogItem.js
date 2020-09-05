import React from 'react';

const BlogItem = ({ title, description, img }) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="blog__item">
                <div className="blog__item__pic">
                    <img src={img} alt="" />
                </div>
                <div className="blog__item__text">
                    <ul>
                        <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                        <li><i className="fa fa-comment-o"></i> 5</li>
                    </ul>
                    <h5><a href="/#">{title}</a></h5>
                    <p>{description}</p>
            </div>
        </div>
        </div >
    );
}

export default BlogItem;
