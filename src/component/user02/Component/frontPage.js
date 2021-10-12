import React, { Component } from 'react';
import '../css/style.css';
import { NavLink} from 'react-router-dom';

class Frontpage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }    

    render() { 
        // const width = {
        //     width:'14rem'
        // }
        return ( 
            <div>
                <div>
                    <form className="row gx-3 gy-2 justify-content-center">
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="choseGame">choseGame</label>
                            <select className="form-select" id="choseGame">
                                <option selected>選擇遊戲</option>
                                <option value="1">楓之谷</option>
                                <option value="2">英雄聯盟LOL</option>
                                <option value="3">天堂M</option>
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <label className="visually-hidden" for="choseSever">choseSever</label>
                            <select className="form-select" id="choseSever">
                                <option selected>全伺服器</option>
                                <option value="sever1">艾麗亞</option>
                                <option value="sever2">普力特</option>
                                <option value="sever3">琉德</option>
                            </select>
                        </div>
                        <div className="col-sm-2">
                            <label className="visually-hidden" for="choseType">choseType</label>
                            <select className="form-select" id="choseType">
                                <option defaultValue>物品種類</option>
                                <option value="gameMoney">遊戲幣</option>
                                <option value="props">道具</option>
                                <option value="gameAccount ">帳號</option>
                                <option value="3">代練</option>

                            </select>
                        </div>
                        <div className="col-sm-2">
                            <label className="visually-hidden" for="specificSizeInputName">Name</label>
                            <input type="text" className="form-control" id="specificSizeInputName" placeholder="標題關鍵字搜尋"/>
                        </div>
                        <div className="col-auto">
                            <NavLink to="/VGT/ProductSearchPage"><button type="submit" className="btn btn-project" >搜尋</button></NavLink>
                        </div>
                    </form>
                </div>
                <section className=" text-center mt-5">
                    <h4>創新、便利、安全的虛擬交易，就在VGT！</h4>
                </section>
                <div style={{ width: '100%', height: '50px'}}></div>

                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-07/0ccd6760-9c77-11e9-8f7b-5d95d434c699" className="d-block mx-auto" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://dummyimage.com/1000x200/ff8400/ffffff" className="d-block mx-auto" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="https://dummyimage.com/1000x200/f057c5/ffffff" className="d-block mx-auto" alt="..."/>
                        </div>
                    </div>
                </div>
                <div className="container w-75 mt-5 border-secondary">
                    <table className="table table-bordered table-hover">
                        <thead className="bg-project">
                            <tr>
                                <th className="col-9">公告</th>
                                <th className="col-3">更新日期</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        第五次更新
                                    </a>
                                </td>
                                <td>2021-09-07</td>
                            </tr>
                            <tr>
                                <td>第四次更新</td>
                                <td>2021-09-06</td>
                            </tr>
                            <tr>
                                <td>第三次更新</td>
                                <td>2021-09-05</td>
                            </tr>
                            <tr>
                                <td>第二次更新</td>
                                <td>2021-09-04</td>
                            </tr>
                            <tr>
                                <td>第一次更新</td>
                                <td>2021-09-03</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-body modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">楓之谷交易上線</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                楓之谷虛寶交易上線拉
                            </div>
                            <div className="row">
                                <div className="col-md-4 ms-auto">2021-09-07</div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-project" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column container  mt-5">

                    <div className="row justify-content-between">
                        <div className="card" style={{ width: '14rem'}}>
                            <img src="./S__4997272.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">英雄聯盟</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: '14rem'}}>
                            <img src="./S__4997272.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">楓之谷</h5>
                            </div>
                        </div>
                        <div className="card" style={{  width: '14rem'}}>
                            <img src="./S__4997272.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">RO仙境傳說</h5>
                            </div>
                        </div>
                        <div className="card" style={{  width: '14rem'}}>
                            <img src="./S__4997272.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">RO仙境傳說</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: '14rem'}}>
                            <img src="./S__4997272.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">RO仙境傳說</h5>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-between">
                        <div className="card" style={{  width: '14rem'}}>
                            <img src="./S__4997272.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">魔獸世界</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: '14rem'}}>
                            <img src="./S__4997272.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">希望戀曲</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: '14rem'}}>
                            <img src="./S__4997272.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">AION永恆紀元</h5>
                            </div>
                        </div>
                        <div className="card" style={{  width: '14rem'}}>
                            <img src="./S__4997272.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">AION永恆紀元</h5>
                            </div>
                        </div>
                        <div className="card" style={{ width: '14rem'}}>
                            <img src="./S__4997272.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">AION永恆紀元</h5>
                            </div>
                        </div>
                    </div>                                     
                </div>    
                <br/>
                <br/>
                            
            </div>
            
        );
    }        
}
 
export default Frontpage;