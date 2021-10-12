import React, { Component } from 'react';
import '../css/storedValue.css';
import { NavLink } from 'react-router-dom'; 
class StoredValue extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="titleDiv">
                    <h3 className="formTitle">VGT幣儲值中心</h3>
                </div>
                <div className="container">
                    <h4 className="h3Margin">1.請選擇付款方式</h4>
                    <div className="selectDiv col-md-8">
                        <select className="form-select" aria-label="Default select example">
                            <option className="a" selected>信用卡</option>
                        </select>
                    </div>
                    <h4 className="h3Margin">2.選擇儲值點數</h4>
                    <div className="radioDiv col-md-8">
                        <div className="item">
                            <input type="radio" id="140p" name="pointID" value="140" /><label for="140p" className="price">VGT幣
                                &times;&nbsp;&nbsp;&nbsp;140<span>NT$&nbsp;&nbsp;&nbsp;&nbsp;100</span></label>
                        </div>
                        <div className="item">
                            <input type="radio" id="350p" name="pointID" value="350" /><label for="350p" className="price">VGT幣
                                &times;&nbsp;&nbsp;&nbsp;350<span>NT$&nbsp;&nbsp;&nbsp;&nbsp;250</span></label>
                        </div>
                        <div className="item">
                            <input type="radio" id="700p" name="pointID" value="700" /><label for="700p" className="price">VGT幣
                                &times;&nbsp;&nbsp;&nbsp;700<span>NT$&nbsp;&nbsp;&nbsp;&nbsp;500</span></label>
                        </div>
                        <div className="item">
                            <input type="radio" id="1400p" name="pointID" value="1400" /><label for="1400p" className="price">VGT幣
                                &times;&nbsp;1,400<span>NT$&nbsp;&nbsp;1,000</span></label>
                        </div>
                        <div className="item">
                            <input type="radio" id="3500p" name="pointID" value="3500" /><label for="3500p" className="price">VGT幣
                                &times;&nbsp;3,500<span>NT$&nbsp;&nbsp;2,500</span></label>
                        </div>
                    </div>
                </div>

                <div className="btnDiv">
                    <NavLink to="/VGT/storeValuePage" className="aText" target="_parent"><button type="submit" className="btn myBtn" id="submitBtn"
                        onClick="vgtBtn()">儲值VGT幣</button></NavLink>
                </div>
            </div>

        )
    }
}

export default StoredValue;