import React, { Component } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../src/component/header/header';
import Footer from '../src/component/footer/footer';
import BodyRouter from '../src/component/body/bodyRouter';
// import Navigation from './component/user04/component/vgtNavigation';
// import Pages from '../src/component/user04/component/vgtPages';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <React.Fragment>
            <div className="container">
                <div>
                    <Header/> 
                </div>
                <br/>
                <div>
                    <BodyRouter/>                     
                    {/* <Navigation/>                      */}
                    {/* <Pages/>                      */}
                </div>
                <br/>                                                           
            </div>
            <div>
                <Footer/>
            </div>                                    
        </React.Fragment>         
        );
    }
}

export default App;
