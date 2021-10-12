import React, { Component } from 'react';
import '../../css/myStyle05.css';

class Dealer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container mt-5 border border-dark w-75" style={{height: '250px'}}>
                <h3 className="title mt-3 overflow-ellipsis text-center font-weight-bold">
                    交易進行中
                </h3>
                <div className="mt-3 p-2 myContent">商品標題: 陰陽 法師 退谷 航海 %智</div>
                <div className="p-2 myContent">賣家編號: ID 1445252</div>
                <div className="p-2 myContent">遊戲名稱: 楓之谷</div>
                <div className="p-2 myContent">商品分類: 帳號</div>
            </div>
         );
    }
}
 
export default Dealer;