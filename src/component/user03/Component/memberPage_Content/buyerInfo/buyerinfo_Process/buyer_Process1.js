import React, { Component } from 'react';
import BuyerCart from '../../../../../user05/Component/buyer/buyerCart';
import BuyerCheckout from '../../../../../user05/Component/buyer/buyerCheckout';

class Process1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <BuyerCart/>
                <BuyerCheckout/>
            </div>
         );
    }
}
 
export default Process1;