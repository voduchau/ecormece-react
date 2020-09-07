import React from 'react';
import BlogItem from './BlogItem';
import blog1 from '../../../images/blog/blog-1.jpg';
import blog2 from '../../../images/blog/blog-2.jpg';
import blog3 from '../../../images/blog/blog-3.jpg';

const Blog = () => {
    return (
        <section className="from-blog spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title from-blog__title">
                            <h2>From The Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <BlogItem title="Cooking tips make cooking simple" description="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat" img={blog1} />
                    <BlogItem title="Visit the clean farm in the US" description="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat" img={blog2} />
                    <BlogItem title="Cooking tips make cooking simple" description="Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat" img={blog3} />
                </div>
            </div>
        </section>
    );
}

export default Blog;
