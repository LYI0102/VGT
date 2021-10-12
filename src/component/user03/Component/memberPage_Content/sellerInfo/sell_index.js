import React, { Component } from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import TradeSellTransfer from '../sellerInfo/sellerinfo_Trade/tradeSellTransfer';
import TradeSellCancel from '../sellerInfo/sellerinfo_Trade/tradeSellCancel';
import TradeSellComplete from '../sellerInfo/sellerinfo_Trade/tradeSellComplete';
import TradeFinance from '../sellerInfo/sellerinfo_Management/tradeFinance';
import TradeManage from '../sellerInfo/sellerinfo_Management/tradeManage';
import DealerProcess1 from '../sellerInfo/sellerinfo_Process/dealerProcess1';
import DealerFinishTrade from '../../../../user05/Component/dealer/dealerFinishTrade';
import DealerCancelTrade from '../../../../user05/Component/dealer/dealerCancelTrade';
import '../../../css/style03.css';


class SellIndex extends Component {
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
                                <NavLink className="nav-link page-link" exact to="/VGT/memberPage/sellerInfo/tradeTransfer">交易中商品</NavLink>
                            </li> 
                            <li className="nav-item "> 
                                <NavLink className="nav-link page-link" exact  to="/VGT/memberPage/sellerInfo/tradeComplete">已完成交易</NavLink>
                            </li>                            
                            <li className="nav-item "> 
                                <NavLink className="nav-link page-link" exact  to="/VGT/memberPage/sellerInfo/tradeCancel">已取消交易</NavLink>
                            </li>                            
                            <li className="nav-item "> 
                                <NavLink className="nav-link page-link" exact  to="/VGT/memberPage/sellerInfo/tradeManage">商品管理</NavLink>
                            </li>                            
                            <li className="nav-item "> 
                                <NavLink className="nav-link page-link" exact  to="/VGT/memberPage/sellerInfo/tradeFinance">財務管理</NavLink>
                            </li>                           
                        </ul>
                    </nav>
                    <React.Fragment>
                        <Route exact path="/VGT/MemberPage/sellerInfo">
                            <Redirect to="/VGT/memberPage/sellerInfo/tradeTransfer"></Redirect>
                        </Route>
                        <Route exact path="/VGT/memberPage/sellerInfo/tradeTransfer" component={TradeSellTransfer}></Route>
                        <Route exact path="/VGT/memberPage/sellerInfo/tradeComplete" component={TradeSellComplete}></Route>
                        <Route exact path="/VGT/memberPage/sellerInfo/tradeCancel" component={TradeSellCancel}></Route>
                        <Route exact path="/VGT/memberPage/sellerInfo/tradeManage" component={TradeManage}></Route>
                        <Route exact path="/VGT/memberPage/sellerInfo/tradeFinance" component={TradeFinance}></Route>
                        <Route exact path="/VGT/memberPage/sellerInfo/inTrade" component={DealerProcess1}></Route>
                        <Route exact path="/VGT/memberPage/sellerInfo/CompleteTrade" component={DealerFinishTrade}></Route>
                        <Route exact path="/VGT/memberPage/sellerInfo/CancelTrade" component={DealerCancelTrade}></Route>
                    </React.Fragment>                                
                </div>
            </React.Fragment>                            
         );
    }
}
 
export default SellIndex;