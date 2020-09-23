import React, { useContext } from 'react';
import CategoryItem from './CategoryItem';
import OwlCarousel from 'react-owl-carousel';
import { GetItemContext } from '../../../context/GetItemContext';

const Categories = () => {
    // const [imgCate, setImg] = useState([])
    const { item } = useContext(GetItemContext);
    // const [isMounted, setIsMounted] = useState(false);

    const renderView = () => {
        return item.categories.map(item => {
            return <CategoryItem key={item.cateID} image={item.img} categoryName={item.cateName} />
        })
    }
    // useEffect(() => {
    //     if (item.categories.length !== 0) {
    //         setImg(item.categories)
    //         setIsMounted(true)
    //     }
    // }, [item.categories])
    return (
        <section className="categories">
            {
                <div className="container">
                    <div className="row">
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={20}
                            autoHeightClass
                            responsiveClass={true}
                            // margin={0}
                            item={4}
                            stagePadding={0}
                            mergeFit={true}
                            center={true}
                            nav={false}
                            autoplayHoverPause={true}
                            autoplay={true}
                            autoplayTimeout={2500}
                            smartSpeed={1200}
                            animateOut='fadeOut'
                            animateIn='fadeIn'
                            navText={["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"]}
                        >
                            {renderView()}
                        </OwlCarousel>
                    </div>
                </div>
            }
        </section>
    )
}

export default Categories;
