import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
class QuestionNav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            
            // <nav className="sidebar card py-2 mb-4 ">
            //         <ul className="nav flex-column " id="nav_accordion">
            //             <li className="nav-item ">
            //                 <a className="nav-link" href="#"> 問題分類 </a>
            //             </li>
            //             <li className="nav-item has-submenu ">
            //                 <a className="nav-link  " href="#"> 新手上路 </a>
            //                 <ul className="submenu collapse ">
            //                     <li><a className="nav-link bg-project " href="./question-buySellTrad.html">買賣交易流程 </a></li>
            //                     <li><a className="nav-link bg-project " href="./question-buy.html">付款方式 </a></li>
            //                     <li><a className="nav-link bg-project " href="#">賣家出售申請</a> </li>
            //                 </ul>
            //             </li>
            //             <li className="nav-item has-submenu">
            //                 <a className="nav-link" href="#">售後服務</a>
            //                 <ul className="submenu collapse">
            //                     <li><a className="nav-link bg-project " href="./question-tradeSafe.html">帳號交易安全</a></li>
            //                     <li><a className="nav-link bg-project " href="#">交易申訴</a></li>
            //                     <li><a className="nav-link bg-project " href="./question-tradeCancel.html">申請取消交易</a></li>
                
            //                 </ul>
            //             </li>
                
            //         </ul>
            //     </nav>
            <nav className="h-100 border border-primary p-2">
                <ul className="h-auto mt-3 d-flex flex-column text-center list-unstyled nav-pills">
                    <li className="nav-items p-2 pb-5 h4">
                        <NavLink className="nav-link" to="/VGT/QuestionPage/questionBuySellTrad">
                            買賣交易流程
                        </NavLink>
                    </li>
                    <li className="nav-items pb-5 h4">
                        <NavLink className="nav-link" to="/VGT/QuestionPage/questionBuy">
                            付款方式
                        </NavLink>
                    </li>
                    <li className="nav-items pb-5 h4">
                        <NavLink  className="nav-link" to="/VGT/QuestionPage/questionTradeSafe">
                            帳號交易安全
                        </NavLink>
                    </li>
                    {/* <li className="nav-items pb-5 h4">
                        <NavLink className="nav-link" to="">
                            交易申訴
                        </NavLink>
                    </li> */}
                    <li className="nav-items pb-5 h4">
                        <NavLink className="nav-link" to="/VGT/QuestionPage/questionTradeCancel">
                            申請取消交易
                        </NavLink>
                    </li>
                </ul>
            </nav>
         );
    }
}

export default QuestionNav;
  
    
