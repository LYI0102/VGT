import React, { Component } from 'react';
import '../../css/myStyle05.css';

class BuyerMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div class="mt-5 container border border-dark" style={{height: 'auto'}}>
                <h3 class="title mt-4 overflow-ellipsis text-center font-weight-bold">
                    交易留言
                </h3>
                <div class="mt-5 container">
                    <div class="mt-2 myBorder">
                        <div>留言ID</div>
                        <div class="mb-1">留言內容</div>
                    </div>
                    <div class="mt-2 myBorder">
                        <div>留言ID</div>
                        <div class="mb-1">留言內容</div>
                    </div>
                    <div class="mt-2 myBorder">
                        <div>留言ID</div>
                        <div class="mb-1">留言內容</div>
                    </div>
                    <div class="mt-5 d-flex flex-row justify-content-center">
                        <form action="">
                            <textarea class="border" name="mytext" rows="3" cols="40" placeholder="請輸入留言內容"></textarea>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default BuyerMsg;