import React, { Component } from 'react';
import Login from '../user01/Component/login';
import logo from '../header/logo.svg';
import '../header/style.css';
// import '../header/style.scss';
import { NavLink } from "react-router-dom";
import axios from 'axios';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vgtid: '',
            vgtname: '',
            loginButton: '',
            logoutButton: 'd-none',
            managePage:'d-none',
            auth:1,
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/Vgt/vgtserver/apilogin').then(
            (response) => {
                if (response.data[0].auth === 1) {
                    this.setState({
                        vgtid: response.data[0].vgtid,
                        vgtname:response.data[0].vgtname,
                        loginButton: "d-none",
                        logoutButton: "",
                    });
                }else if(response.data[0].auth === 2){
                    this.setState({
                        vgtid: response.data[0].vgtid,
                        vgtname:response.data[0].vgtname,
                        loginButton: "d-none",
                        logoutButton: "",
                        managePage:"",
                    })
                }
            }
        )
    }

    logout = () => {
        axios.get('http://localhost:3000/Vgt/vgtserver/apilogout');
        window.location.href = 'http://localhost:8000/VGT/FrontPage';
    }

    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/VGT/FrontPage">
                            <img src={logo} alt="Logo" className="logo" />
                        </NavLink>

                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto ">
                                <li className={`nav-item navItem nav-link fw-bold ${this.state.logoutButton}`}>{` ?????? ${this.state.vgtname} ?????????`}<br/>{`????????????VGT????????????`}</li>
                                <li className={`nav-item dropdown navItemLine ${this.state.logoutButton}`}>
                                    <a className="nav-link dropdown-toggle nbr-link " href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        ????????????
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <NavLink className="dropdown-item" to={`/VGT/MemberPage/profile/${this.state.vgtid}`}>????????????</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to={`/VGT/MemberPage/storeValue/${this.state.vgtid}`}>????????????</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/MemberPage/buyerInfo">????????????</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/MemberPage/sellerInfo">????????????</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/MemberPage/credit">????????????</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/MemberPage/customerService">????????????</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/ProductPutonPage">????????????</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className={`dropdown-item ${this.state.managePage}`} to="/VGT/vgtPages">????????????</NavLink>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown navItemLine">
                                    <a className="nav-link dropdown-toggle nbr-link" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        ????????????
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/QuestionPage/questionBuySellTrad">??????????????????</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/QuestionPage/questionBuy">????????????</NavLink>

                                        </li>
                                        {/* <li><a className="dropdown-item" href="#">??????????????????</a></li> */}

                                    </ul>
                                </li>

                                <li className="nav-item dropdown navItemLine">
                                    <a className="nav-link dropdown-toggle nbr-link" href="#" id="navbarDropdownMenuLink" role="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        ????????????
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/QuestionPage/questionTradeSafe">
                                                ??????????????????</NavLink>
                                        </li>
                                        {/* <li><a className="dropdown-item" href="#">????????????</a></li> */}
                                        <li>
                                            <NavLink className="dropdown-item" to="/VGT/QuestionPage/questionTradeCancel">??????????????????</NavLink>
                                        </li>

                                    </ul>
                                </li>

                                <li className={`nav-item ps-md-2 navItemButton ${this.state.loginButton}`}>
                                    <button className="btn btn-project" data-bs-toggle="modal" data-bs-target="#loginModal">??????/??????</button>
                                </li>
                                <li className={`nav-item ps-md-2 navItemButton ${this.state.logoutButton}`}>
                                    <button className="btn btn-project" onClick={this.logout}>??????</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Login />
            </div>

        );
    }
}

export default Header;