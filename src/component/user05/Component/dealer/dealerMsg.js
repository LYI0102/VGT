import React, { Component } from 'react';

class DealerMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="mt-5 container border border-dark" style={{height: 'auto'}}>
                <h3 className="title mt-4 overflow-ellipsis text-center font-weight-bold">
                    交易留言
                </h3>
                <div className="mt-5 container">
                    <div className="mt-2 myBorder">
                        <div>留言ID</div>
                        <div>留言內容</div>
                    </div>
                    <div className="mt-2 myBorder">
                        <div>留言ID</div>
                        <div>留言內容</div>
                    </div>
                    <div className="mt-2 myBorder">
                        <div>留言ID</div>
                        <div>留言內容</div>
                    </div>
                    <div className="mt-5 d-flex flex-row justify-content-center">
                        <form action="">
                            <textarea className="border" name="mytext" rows="3" cols="40" placeholder="請輸入留言內容"></textarea>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DealerMsg;