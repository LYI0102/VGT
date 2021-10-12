import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import date from 'date-and-time';

class TradeBuyComplete extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            "buyerid":5,
            "orderid":9,
            "buyereval":"",
            "buyercmt":"",
            "cmmtdate":""
        }
    }

    ordereval = (e) => {
        this.state.buyereval = e.target.value;
        this.setState({});
        console.log( this.state.buyereval);
    }

    ordercmmt = (e) => {
        this.state.buyercmt = e.target.value;
        this.setState({});
        console.log( this.state.buyercmt);
    }

    postButton = (e) => {
        // console.log("OK"); 
        e.preventDefault();
        axios.post(`http://localhost:3000/Vgt/vgtserver/order/buyercmmt`,{
            buyerid:this.state.buyerid,
            orderid:this.state.orderid,
            buyereval: this.state.buyereval,
            buyercmt: this.state.buyercmt,
            cmmtdate:date.format(new Date(), 'YYYY/MM/DD')            

        })
        .then(res => console.log(res));  
    }



    render() { 
        return ( 
            <React.Fragment>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">商品編號</th>
                            <th scope="col">遊戲名稱</th>
                            <th scope="col">遊戲伺服器</th>
                            <th scope="col">商品種類</th>
                            <th scope="col" className="text-center">操作</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        <tr>                           
                            <th scope="row">No.4565135</th>                            
                            <td>楓之谷</td>
                            <td>雪吉拉</td>
                            <td>道具</td>
                            <td className="d-flex justify-content-evenly">
                                <NavLink exact to="/VGT/memberPage/buyerInfo/tradeCart/item/finishTrade" className="btn" >查看商品詳情</NavLink>
                                <a className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">給予評價</a>                                
                            </td>                                                      
                        </tr>
                    </tbody>
                </table>    
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-body modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content bg-white">
                            <div className="modal-header">
                                <h5 className="modal-title fw-bold" id="exampleModalLabel">交易評價</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <p>本次交易的評價等級</p>
                                    <div className="d-flex w-100">
                                        <div className="d-flex  align-content-center w-25">
                                            <div className="me-2">
                                                <input onChange={this.ordereval} type="radio" value="好評" id="good" className="" name="comment"/>                                    
                                            </div>
                                            <label className="w-50" htmlFor="good">
                                                好評
                                            </label>
                                        </div>
                                        <div className="d-flex justify-content-center align-content-center w-25">
                                            <div className="me-2">
                                                <input onChange={this.ordereval} type="radio" value="中立" id="middle" className="" name="comment"/>                                    
                                            </div>
                                            <label className="w-50" htmlFor="middle">
                                                中立
                                            </label>
                                        </div>
                                        <div className="d-flex justify-content-center align-content-center w-25">
                                            <div className="me-2">
                                                <input onChange={this.ordereval} type="radio" value="負評" id="bad" className="" name="comment"/>                                    
                                            </div>
                                            <label className="w-50" htmlFor="bad">
                                                負評
                                            </label>
                                        </div>                                                                                                                       
                                    </div>                                    
                                </div>
                                <div className="h-100">
                                    <label className="form-label w-25" htmlFor="middle">給賣家的評價</label>                                           
                                    <textarea onChange={this.ordercmmt} type="textarea" id="middle" 
                                    class="form-control w-100" style={{ height:"100px" }}/>                                      
                                </div>                                                                                            
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.postButton} type="button" className="btn btn-project" data-bs-dismiss="modal">確認送出</button>
                                <button type="button" className="btn btn-project" data-bs-dismiss="modal">取消</button>
                            </div>
                        </div>
                    </div>
                </div>           
            </React.Fragment>
         );
    }
}
 
export default TradeBuyComplete;