import React from 'react';
import RestrauntItem from './RestrauntItem';
import card1 from '../../../../../assets/images/card1.png'
import card2 from '../../../../../assets/images/card2.png'
import card3 from '../../../../../assets/images/card3.png'
import card4 from '../../../../../assets/images/card4.png'

const Restaurants = () => {
    const restaurants = [{
        title: 'Vida Vera',
        image:card1
    }, {
        title: 'Zama Zulu',
        image:card2
    }, {
        title: 'Khawaja Yanni',
        image:card3
    }, {
        title: 'Yamagata',
        image:card4
    }];

    return (
            <div className='row my-lg-5 my-2'>
                {restaurants.map((item, index) => (
                    <div key={index} className='col-lg-6'>
                        <RestrauntItem title={item.title} image={item.image} />
                    </div>
                ))}
            </div>
    );
};

export default Restaurants;
