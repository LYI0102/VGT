import React, { Component } from 'react';
import '../../css/myStyle05.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container mt-5 border border-dark w-75" >
                <div className="d-flex flex-row justify-content-between">
                    <h3 className="title mt-3 p-2 overflow-ellipsis text-center">
                        角色資料
                    </h3>
                </div>
                <div className="w-100">
                    
                    <div className="mt-3 p-2 myContent">伺服器: 普力特</div>
                    <div className="d-flex flex-row">
                        <div className="mt-2 p-2 myContent">角色名稱: </div>
                        <input type="text" className="p-2 mt-2 border" />
                    </div>
                    <div class="d-flex flex-row">
                        <div class="d-flex flex-row">
                            <div class="mt-2 p-2 myContent">角色特徵: </div>
                            <input type="text" class="p-2 mt-2 border" />
                            <button class="mt-1 mx-3 btn myBtn2">確認角色資料</button>                            
                        </div>                       
                    </div>
                    <br/>
                </div>
            </div>
         );
    }
}
 
export default Item;