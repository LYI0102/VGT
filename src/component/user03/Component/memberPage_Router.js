import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import StoreValue from '../../user03/Component/memberPage_Content/memberStoreValue';
import Profile from '../../user03/Component/memberPage_Content/memberProfile';
import BuyerInfo from '../../user03/Component/memberPage_Content/memberBuyerInfo';
import SellerInfo from "../../user03/Component/memberPage_Content/memberSellerInfo";
import Credit from '../../user03/Component/memberPage_Content/memberCredit';



const PageRouter = () => (
    <Switch>
        <Route exact path="/VGT/MemberPage">
            <Redirect to="/VGT/MemberPage/profile"></Redirect>
        </Route>
        <Route  path="/VGT/MemberPage/buyerInfo" component={BuyerInfo}></Route>
        <Route  path="/VGT/MemberPage/storeValue" component={StoreValue}></Route>
        <Route  path="/VGT/MemberPage/profile" component={Profile}></Route>
        <Route  path="/VGT/MemberPage/sellerInfo" component={SellerInfo}></Route>
        <Route  path="/VGT/MemberPage/credit" component={Credit}></Route>
    </Switch>
);

class MemberPageRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <PageRouter/>                                                   
         );
    }
}


export default MemberPageRouter;