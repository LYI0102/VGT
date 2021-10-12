import React, { Component } from 'react';
import Dealer from '../../../../../user05/Component/buyer/buyerInTrade_dealer';
import Item from '../../../../../user05/Component/buyer/buyerInTrade_item';
class Process2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Dealer/>
                <Item/>
            </div>
        );
    }
}
 
export default Process2;