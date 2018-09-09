import React, {Component} from 'react';
import './Styles/StoreHome.css';

import {Input, Menu, Icon} from 'antd';

const Search = Input.Search

export default class StoreHome extends Component {
    constructor(props) {
        super(props)

        this.state= {

        }
    }
    render() {
        return(
            <div className='StoreHome-App'>
            <br />
            <br />
                <div className='SH-Body'>
                <img src={require('../../Assets/SH-Bkg.jpg')} alt='' className='SH-Bkg-Img'/> 
                    <div className='SH-Search'>
                        <Search placeholder='input search text' onSearch={value => console.log(value)} enterButton className='Search' />
                    </div>
                    <div className='SH-Menu'>
                        <a><h2>Protiens</h2></a>
                        <a><h2>Pre Workouts</h2></a>
                        <a><h2>BCAA's</h2></a>
                        <a><h2>Vitamins</h2></a>
                        <a><h2>Equipment</h2></a>
                    </div>
                    <h1 className='SH-Features'><strong>FEATURED TITLES</strong></h1>
                    <div className='SH-Featured-Imgs'>
                        <div className='SH-Left'>
                            <img src='https://s7d2.scene7.com/is/image/VitaminShoppe/1629526_01?$OP_PDPSKU$' alt='' />
                            <img src='https://thesupplementreviews.org/wp-content/uploads/2016/05/mr-hyde-pre-workout-300x300.jpg' alt='' />
                            <img src='https://www.fitnessnord.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/g/h/ghostlegend.jpg' alt='' />
                        </div>
                        <div className='SH-Right'>
                            <img src='https://guideimg.alibaba.com/images/shop/75/08/29/7/golds-gym-4-leather-lumbar-weight-belt_3777737.jpg' alt='' />
                            <img src='https://images-na.ssl-images-amazon.com/images/I/61PZN4lKxIL._SY355_.jpg' alt='' />
                            <img src='https://www.amcal.com.au/wcsstore/ExtendedSitesCatalogAssetStore/images/products/9314549902192_LL_1.jpg' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}