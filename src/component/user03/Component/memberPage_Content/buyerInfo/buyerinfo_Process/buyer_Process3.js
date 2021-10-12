import React, { Component } from 'react';
import TradeBuyReceive from '../../../../../user05/Component/buyer/buyerReceive';
import BuyerMsg from '../../../../../user05/Component/buyer/buyerMsg';

class Process3 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <TradeBuyReceive/>
                <BuyerMsg/>
            </div>
         );
    }
}
 
export default Process3;