import React, { Component } from 'react';
import AppealIndex from '../../../user02/Component/appeal_index';


class CustomerService extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <AppealIndex/>
            </div>            
        );
    }
}
 
export default CustomerService;