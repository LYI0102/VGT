import React, { Component } from 'react';
import DealerTransfer from '../../../../../user05/Component/dealer/dealerTransfer';
import DealerMsg from '../../../../../user05/Component/dealer/dealerMsg';


class DealerProcess1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <DealerTransfer/>
                <DealerMsg/>
            </div>
         );
    }
}
 
export default DealerProcess1;