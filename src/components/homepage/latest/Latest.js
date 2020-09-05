import React from 'react';
import LatestProduct from './LatestProduct';

const Latest = () => {
    return (
        <section className="latest-product spad">
            <div className="container">
                <div className="row">
                    <LatestProduct title="Latest Products" name="Crab Pool Security" price="$30.000" />
                    <LatestProduct title="Top rated Products" name="Crab Pool Security" price="$30.000" />
                    <LatestProduct title="Review Products" name="Crab Pool Security" price="$30.000" />
                </div>
            </div>
        </section>
    );
}

export default Latest;
