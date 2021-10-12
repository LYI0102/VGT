import React, { Component } from 'react';
import '../../css/myStyle05.css';


class BuyerCart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="container mt-5 border border-dark w-50" >
                    <div className="d-flex flex-row justify-content-between">
                        <h3 className="title font-weight-bold h-25 mt-3 p-2 overflow-ellipsis text-truncate">
                            小資破風 退谷 出清
                        </h3>
                        <button className="myBtn mt-3 mr-3 myButton" >
                        
                        </button>
                    </div>
                    <div>
                        <div className="mt-3 p-2 myContent">賣家編號: ID 1445252</div>
                        <div className="mt-2 p-2 myContent">遊戲名稱: 楓之谷</div>
                        <div className="d-flex flex-row justify-content-between mt-2">
                            <div className="p-2 myContent">商品分類: 帳號</div>
                            <div className="mr-0 py-2 border-bottom border-secondary mb-1">$ &nbsp;&nbsp;&nbsp;&nbsp;<span
                                 className="price">1234</span></div>
                        </div>
                    </div>
                </div>                
            </React.Fragment>
         );
    }
}
 
export default BuyerCart;