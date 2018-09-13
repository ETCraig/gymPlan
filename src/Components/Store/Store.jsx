import React, {Component} from 'react';
import './Store.css';

import axios from 'axios';
import {Button} from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {storeProducts, activeCart, storeCartData} from '../../ducks/reducer';

class Store extends Component {
    componentDidMount(){
        axios.get('/api/getProducts').then(results => {
            console.log(results)
            this.props.storeProducts(results.data.products)
            this.props.activeCart(results.data.cart)
        })
    }
    render() {
        return(
            <div className='StoreHome-App'>
            <br />
            <br />
                <div className='SH-Body'>
                <img src={require('../../Assets/SH-Bkg.jpg')} alt='' className='SH-Bkg-Img'/> 
                <Link to='/Products'><Button style={{marginTop: '25px'}}>Browse Products!</Button></Link>
                <br />
                <h3>Store categories and searching coming soon!</h3>
                    <div className='SH-Menu'>
                        <a><h2>Protiens</h2></a>
                        <a><h2>Pre Workouts</h2></a>
                        <a><h2>BCAA's</h2></a>
                        <a><h2>Vitamins</h2></a>
                        <a><h2>Equipment</h2></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {storeProducts, storeCartData, activeCart})(Store);