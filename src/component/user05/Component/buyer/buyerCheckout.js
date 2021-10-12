import React, { Component } from 'react';
import '../../css/myStyle05.css';

class BuyerCheckout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="container mt-5 border border-dark w-50">
            <h3 className="title font-weight-bold sh-25 mt-3 p-2 overflow-ellipsis text-truncate">
                付款資訊
            </h3>
            <div className="w-100">
                <div className="mt-1 p-2 myContent">買家編號: ID 1255252</div>
                <div className="d-flex flex-row justify-content-between w-100">
                    <div className="mt-1 p-2 font-weight-bold myContent">
                        總計金額
                    </div>
                    <div className="mr-0 py-2 border-bottom border-secondary">
                        $ &nbsp;&nbsp;&nbsp;&nbsp;<span className="price">6912</span>
                    </div>
                </div>
                <br/>
                <h4 className="mt-4 p-2 myContent font-weight-bold">餘額付款</h4>
                <div className="p-2">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="p-2 myContent">帳戶餘額</div>
                        <div className="mr-0 p-2">
                            $ &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="price">8888</span>
                        </div>
                    </div>
                    <form className="mt-2 d-flex flex-row justify-content-between">
                        <div className="col-4">
                            <input type="password" className="form-control" id="inputPassword2" placeholder="Password"/>
                        </div>
                        <div className="pr-2">
                            <input type="submit" value="確認付款" className="btn myBtn2"></input>
                        </div>
                    </form>
                </div>
    
                <div className="mt-4 p-2">
                    <h4 className="myContent font-weight-bold">信用卡付款</h4>
                    <form className="my-4 d-flex flex-row justify-content-between">
                        <div className="col-4 d-flex flex-column ">
                            <input type="text" className="my-1 form-control" id="inputPassword2" placeholder="姓名"/>
                            <input type="password" className="my-1 form-control" id="inputPassword2" placeholder="信用卡卡號"/>
                            <div className="">
                                <input type="text" className="my-1 form-control" id="inputPassword2" placeholder="卡片到期日"/>
                                <input type="text" className="my-1 form-control" id="inputPassword2" placeholder="信用卡安全碼"/>
                            </div>
                        </div>
                        <div className="ml-auto mt-auto">
                            <input type="submit" value="確認付款" className="btn myBtn2"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
         );
    }
}
 
export default BuyerCheckout;