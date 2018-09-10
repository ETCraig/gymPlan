import React, {Component} from 'react';
import './Styles/Cart.css';

import axios from 'axios';
import {connect} from 'react-redux';
import {removeFromCart, storeCartData} from '../../ducks/reducer';
import stripe from '../../StripeKey';
import StripeCheckout from 'react-stripe-checkout';

class cart extends Component {
    constructor() {
        super()

        this.state = {
            quantity: '',
            total: 0
        }
    }
    onToken = (token) => {
        token.card = void 0;
        console.log('token', token);
        axios.post('/api/payment', { token, amount: 100 })
        .then(axios.put('/api/clear-cart'));
        // this.props.history.push('/thankyou')
    }
    componentDidMount(){
        axios.get('/api/displayAll').then(res => {
            console.log(res.data)
            this.props.storeCartData(res.data)
            this.calculateTotal()
        });
    }
    deleteFromCart(id){
        axios.delete(`/api/product/${id}`).then(res => {
            this.props.storeCartData(res.data)
            this.setState({total: 0})
            this.calculateTotal()
        });
    }
    updateQuantity(e){
        axios.put('/api/quantity', {id: e, quantity: this.state.quantity}).then(res =>{
            this.props.storeCartData(res.data);
            this.setState({total:0})
            this.calculateTotal()
        });
    }
    handleQuantity(val) {
        this.setState({quantity: val});
    }
    calculateTotal(){
        let total = this.props.shoppingCart.map((e) => {
            
            var updateTotal = this.state.total + e.price * e.quantity;
            console.log('update', updateTotal)
            this.setState({total: updateTotal })
        });
    }
    render() {
        const imgStyle = {
            width: '120px',
            height: '170px',
            float: 'left',
            margin: '10px'
        }
        const textPosition = {
            float: 'right',
            width: '40%',
            marginLeft: '10px',
            overflowWrap: 'normal'
        }
        const buttonPosition = {
            position: 'absolute',
            top: '0px',
            right: '0px'
        }
        let shoppingCartDisplay = this.props.shoppingCart.map((e,i) => {
            return(
                <div className='mapDivCart' key={i}>
                        <img style={imgStyle} src={e.image} alt="" />
                        <div style={textPosition}>
                            <h3>{e.title}</h3>
                            <h4>{`$${e.price}.00`}</h4>
                            <form class="form-inline">
                                <select class="custom-select my-sm-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={e => this.handleQuantity(e.target.value)}>
                                    <option value="0" selected>{e.quantity}</option>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            <button onClick={() => this.updateQuantity(e.id)}>save</button>  
                            </form>  
                            <div>
                                <button style={buttonPosition} type='button' class='close' aria-label='Close' onClick={() => this.deleteFromCart(e.id)}>
                                    <span aria-hidden='true'>&times;</span>
                                </button>
                            </div>
                    </div>
                </div>
            );
        });
        return(
            <div>
                <div className='displayDivContainer'>
                    <div>
                        {shoppingCartDisplay[0] ?
                        <div className='displayDiv' >
                            {shoppingCartDisplay}
                            <div className='checkout'>
                                <h3>Total: ${this.state.total}</h3>
                                <StripeCheckout 
                                token={this.onToken}
                                stripeKey={stripe.pub_key}
                                amount={this.state.total*100}
                                />
                            </div>
                        </div>
                        : <div>
                            <h1>Your cart is empty!</h1>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps, {removeFromCart, storeCartData})(Cart);