import React, { Component } from 'react';

class AppealResponse extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container ">
                
                <table className="table table-hover">
                    <thead className=" bg-project">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">標題</th>
                            <th scope="col">申訴日期</th>
                            <th scope="col">最後回覆日期</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default AppealResponse;