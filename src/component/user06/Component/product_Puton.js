import React, { Component } from 'react';
import {NavLink } from "react-router-dom";
import '../css/myStyle06.css';

class ProductPuton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">

                <div className="d-flex justify-content-center">
                    <div className="col-8 pt-3">
                        <p className="h2">新增商品</p>
                        <div className="card mt-4">
                            <div className="card-header primebg" style={{ backgroundColor:'#265663' }}>
                            商品資訊
                            </div>
                            <div className="card-body">
                                <div className="input-group mb-5">
                                    <span className="input-group-text" id="basic-addon1">商品名稱</span>
                                    <input type="text" className="form-control" placeholder="請輸入名稱" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-5">
                                    <span className="input-group-text titleHeight me-4">商品圖片</span>
                                    <label className="input-group-text upload_cover me-5" for="inputGroupFile01">
                                        <input type="file" className="d-none" id="inputGroupFile01"/>
                                        <span className="upload_icon">➕</span>
                                    </label>
                                    <label className="input-group-text upload_cover me-5" for="inputGroupFile02">
                                        <input type="file" className="d-none" id="inputGroupFile02"/>
                                        <span className="upload_icon">➕</span>
                                    </label>
                                    <label className="input-group-text upload_cover me-5" for="inputGroupFile03">
                                        <input type="file" className="d-none" id="inputGroupFile03"/>
                                        <span className="upload_icon">➕</span>
                                    </label>
                                    <label className="input-group-text upload_cover me-5" for="inputGroupFile04">
                                        <input type="file" className="d-none" id="inputGroupFile04"/>
                                        <span className="upload_icon">➕</span>
                                    </label>
                                </div>
                                <div className="input-group mb-5">
                                    <label className="input-group-text" for="inputGroupSelect01">商品遊戲</label>
                                    <select className="form-select" id="inputGroupSelect01">
                                    <option selected>請選擇</option>
                                    <option value="1">新楓之谷</option>
                                    <option value="2">英雄聯盟</option>
                                    <option value="3">APEX 英雄</option>
                                    </select>
                                </div>
                                <div className="input-group mb-5">
                                    <label className="input-group-text" for="inputGroupSelect01">伺&nbsp;&nbsp;服&nbsp;&nbsp;器</label>
                                    <select className="form-select" id="inputGroupSelect01">
                                    <option selected>請選擇</option>
                                    <option value="1">艾麗亞</option>
                                    <option value="2">普力特</option>
                                    <option value="3">優伊娜</option>
                                    </select>
                                </div>
                                <div className="input-group mb-5">
                                    <label className="input-group-text" for="inputGroupSelect01">商品種類</label>
                                    <select className="form-select" id="inputGroupSelect01">
                                    <option selected>請選擇</option>
                                    <option value="1">道具</option>
                                    <option value="2">帳號</option>
                                    <option value="3">點數卡</option>
                                    </select>
                                </div>
                                <div className="input-group mb-2">
                                    <span className="input-group-text ">商品資訊</span>
                                    <textarea className="form-control" aria-label="With textarea"></textarea>
                                </div>
                            </div>
                        </div>
        
                    </div>
        
                </div>
        
                <div className="d-flex p-3"></div>
        
                <div className="d-flex justify-content-center">
                    <div className="col-8">
                        
                        <div className="card mt-4">
                            <div className="card-header primebg" style={{ backgroundColor:'#265663'}}>
                            銷售資訊
                            </div>
                            <div className="card-body">
                                <div className="input-group mb-5">
                                    <span className="input-group-text" id="basic-addon1">商品價格</span>
                                    <input type="text" className="form-control" placeholder="請輸入價格" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                                <div className="input-group mb-2">
                                    <span className="input-group-text" id="basic-addon1">商品庫存</span>
                                    <input type="text" className="form-control" placeholder="請輸入庫存" aria-label="Username" aria-describedby="basic-addon1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="d-flex mt-5 justify-content-center">
                    <NavLink to="/VGT/ProductSearchPage">
                        <button type="button" className="btn primebg btnhover" >確認上架</button>
                    </NavLink>    
                </div>                
            </div>
         );
    }
}
 
export default ProductPuton;