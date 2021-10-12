import React, { Component } from 'react';
import {  NavLink, Route, Redirect } from 'react-router-dom';
import TradeBuyCart from '../buyerInfo/buyerinfo_Trade/tradeBuyCart';
import TradeBuyOrder from '../buyerInfo/buyerinfo_Trade/tradeBuyOrder';
import TradeBuyReceive from './buyerinfo_Trade/tradeBuyReceive';
import TradeBuyComplete from '../buyerInfo/buyerinfo_Trade/tradeBuyComplete';
import TradeBuyCancel from '../buyerInfo/buyerinfo_Trade/tradeBuyCancel';
import Process1 from '../buyerInfo/buyerinfo_Process/buyer_Process1';
import Process2 from '../buyerInfo/buyerinfo_Process/buyer_Process2';
import Process3 from '../buyerInfo/buyerinfo_Process/buyer_Process3';
import BuyerFinishTrade from '../../../../user05/Component/buyer/buyerFinishTrade';
import BuyerCancelTrade from '../../../../user05/Component/buyer/buyerCancelTrade';
import '../../../css/style03.css';


class BuyIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <React.Fragment>    
                <div className="container ">
                    <nav aria-label="Page navigation" className=" border-bottom">
                        <ul className="pagination  nav-fill  bg-project">
                            <li className="nav-item bg-project">
                                <NavLink className="nav-link page-link" exact to="/VGT/memberPage/buyerInfo/tradeCart">購物車</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" exact to="/VGT/memberPage/buyerInfo/tradeOrder">我的訂單</NavLink>
                            </li>                           
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" exact to="/VGT/memberPage/buyerInfo/tradeReceive">交易中商品</NavLink>
                            </li>                           
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" exact to="/VGT/memberPage/buyerInfo/tradeComplete">已完成交易</NavLink>
                            </li>                           
                            <li className="nav-item ">
                                <NavLink className="nav-link page-link" exact to="/VGT/memberPage/buyerInfo/tradeCancel">已取消交易</NavLink>
                            </li>                           
                        </ul>
                    </nav>                    
                    <React.Fragment>
                        <Route exact path="/VGT/MemberPage/buyerInfo">
                            <Redirect to="/VGT/memberPage/buyerInfo/tradeCart"></Redirect>
                        </Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeCart" component={TradeBuyCart}></Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeOrder" component={TradeBuyOrder}></Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeReceive" component={TradeBuyReceive}></Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeComplete" component={TradeBuyComplete}></Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeCancel" component={TradeBuyCancel}></Route>
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeCart/item" component={Process1}></Route>                                
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeCart/item/inOrder" component={Process2}></Route>                                
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeCart/item/inTrade" component={Process3}></Route>                                
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeCart/item/finishTrade" component={BuyerFinishTrade}></Route>                                
                        <Route exact path="/VGT/memberPage/buyerInfo/tradeCart/item/cancelTrade" component={BuyerCancelTrade}></Route>                                
                    </React.Fragment>                                                   
                </div>
            </React.Fragment>                     
         );
    }
}
 
export default BuyIndex;