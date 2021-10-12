import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class TradeBuyCart extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
            <div>
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
                                <NavLink exact to="/VGT/memberPage/buyerInfo/tradeCart/item" className="btn">查看商品詳情</NavLink>
                                <a className="btn">刪除此商品</a>
                            </td>                                                      
                        </tr>
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default TradeBuyCart;