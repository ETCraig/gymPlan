import React, {Component} from 'react';
import './Styles/Products.css';

import axios from 'axios';
import {connect} from 'react-redux';
import {Form, Button} from 'antd';

class Products extends Component {
    constructor() {
        super()
        
        this.state = {
            quantity: ''
        }
        this.updateQuantity=this.updateQuantity.bind(this);
    }
    addToCart(e) {
        axios.post('/api/addToCart', {id: e.id, quantity: this.state.quantity}).then(res => {
            console.log(res);
            this.setState({quantity: ''});
        });
    }
    updateQuantity(val) {
        this.setState({quantity: val});
    }
    render() {
        // let productsDisplay = this.props.products.map((e, i) => {
        //     return(
        //         <div className='mapDiv'>
        //             <h3>{e.title}</h3>
        //             <img src={e.image} alt='Product Image' />
        //             <p>{e.description}</p>
        //             <h4>{`$${e.price}.00`}</h4>
        //             <Form className='Form-Inline'>
        //                 <select class="custom-select my-sm-1 mr-sm-2" id="inlineFormCustomSelectPref1" onChange={e => this.updateQuantity(e.target.value, e)}>
        //                     <option value="0" selected>0</option>
        //                     <option value="1">1</option>
        //                     <option value="2">2</option>
        //                     <option value="3">3</option>
        //                     <option value="4">4</option>
        //                     <option value="5">5</option>
        //                 </select>
        //                 <Button type='button' class="btn btn-primary btn-sm" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={() => this.addToCart(e)}>Add To Cart</Button>
        //             </Form>     
        //         </div>
        //     );
        // });
        return(
            <div className='Products-App'>
                <div className='Products-Body'>
                    <div className='display'>
                        {/* {productsDisplay} */}
                    </div>
                </div>
            </div>
        );
    }
} 

function mapStateToProps(state) {
    return{
        products: state.products
    }
}

export default connect(mapStateToProps)(Products);