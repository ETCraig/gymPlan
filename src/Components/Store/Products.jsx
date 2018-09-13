import React, {Component} from 'react';
import './Styles/Products.css';

import axios from 'axios';
import {connect} from 'react-redux';


class Products extends Component {
    constructor() {
        super();

        this.state = {
            quantity: ''
        }
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }
    addToCart(e){
        axios.post('/api/addToCart', {id: e.id, quantity: this.state.quantity}).then(res => {
            console.log(res)
            this.setState({quantity: ''})
        });
    }
    handleQuantityChange(val) {
        this.setState({quantity: val});
    }
    render() {
        const imgStyle = {
            width: '220px',
            height: '220px'
        }
        let productsDisplay = this.props.products.map((element,i) => {
            return(
                <div className='Products-Display' key={i}>
                    <h3>{element.title}</h3>
                    <img style={imgStyle} src={element.image} alt="" />
                    <p>{element.description}</p>
                    <h4>{`$${element.price}.00`}</h4>
                    <form class="Products-Form">
                            <select class="Products-Select" id="inlineFormCustomSelectPref1" onChange={e => this.handleQuantityChange(e.target.value, element)}>
                                <option value="0" selected>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <button type="button" class="Products-Btn" data-toggle="modal" onClick={() => this.addToCart(element)}>Add to Cart</button>
                        </form>
                </div>
            )
        })

        return(
            <div className='Products-App'>
                <div className='Products-Body'>
                    <div className='Display'>
                        {productsDisplay}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(Products);