import React, { Component } from 'react';
import img001 from '../img/img001.png';
import img002 from '../img/img002.png';
import img003 from '../img/img003.png';
import img004 from '../img/img004.png';
import img005 from '../img/img005.jpeg';
import '../css/myStyle06.css';



class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    handleClick = () => {
        var thumbnails = document.getElementsByClassName('thumbnail4')

        var activeImages = document.getElementsByClassName('active')

        for (var i=0; i < thumbnails.length; i++){

            thumbnails[i].addEventListener('click', function(){
                console.log(activeImages)
                
                if (activeImages.length > 0){
                    activeImages[0].classList.remove('active')
                }
                
        
                this.classList.add('active')
                document.getElementById('featured').src = this.src
            })
        }

    }

    render() { 
   
        return (  
                
            <div className="container">

                <div className="d-flex justify-content-center">
                    
                    <div className="column">
                        <img id="featured" className="thumbnail2" src={img001} alt="..."/>
                        <div id="slider" className="d-flex mt-4 justify-content-between">
                            <img className="thumbnail4 active" src={img001} alt="..." onClick={this.handleClick}/>
                            <img className="thumbnail4" src={img002} alt="..." onClick={this.handleClick}/>
                            <img className="thumbnail4" src={img003} alt="..." onClick={this.handleClick}/>
                            <img className="thumbnail4" src={img004} alt="..." onClick={this.handleClick}/>
                        </div>
                    </div>
                    <div className="col-5 ms-5 pt-3">
                        <h5>全伺服【全身裝備配好】⭐各職業都有⭐破百萬瀏覽量回鍋必備🌹送新手裝備✅加倍寵物</h5>
                        <div className="h5 mt-5 secondbg w-50 p-3 ps-4 rounded">
                            <span>價格：$1000</span>
                        </div>
                        <p className="mt-5">遊戲伺服：楓之谷 - 普力特</p>
                        <p className="mt-4">商品種類：道具</p>
                        <p className="mt-4">
                            <span>購買數量：</span>
                            <input type="number" value="1" min="0" max="100" step="1"/>
                            <span>（ 庫存：10 ）</span>
                        </p>
                        <button className="btn btn-danger mt-4 ps-5 pe-5">立即購買</button>
                        <button type="button" className="btn btn-outline-secondary mt-4 ms-4">加入購物車</button>
                    </div>
                </div>
                
                <div className="d-flex p-4"></div>
        
                <div className="d-flex justify-content-center">
                    <div className="card col-9">
                        <div className="card-header">
                            <span className="h6">賣家資訊</span>                        
                        </div>
                        <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <img className="thumbnail3" src={img005} alt=""/>
                                </div>
                                <div className="col-3">
                                    <span className="mt-3 mb-5">會員編號：</span>
                                    <span>123456</span>
                                </div>
                                <div className="col-3">
                                    <span className="mt-3 mb-5">賣家評價：⭐4.5</span>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-warning">聯絡賣家</button>
                                </div>
                            </div>
                        </blockquote>
                        </div>
                    </div>
                </div>
        
                <div className="d-flex p-4"></div>
        
                
                <div className="d-flex justify-content-center">
                    <div className="card text-center bg-light col-9">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">商品資訊</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">提問</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">評價</a>
                            </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <p className="card-text">【練功打王首選】 僅此一個，此單直接下單購買即可</p>
                        </div>
                    </div>
                </div>
                
            </div>
        
         );
    }
}
 
export default ProductDetail;