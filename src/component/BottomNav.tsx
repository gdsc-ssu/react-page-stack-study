import React from "react"
import {Route,Link, Switch} from "react-router-dom"
import "../App.css"

const BottomNav = () => {
    return(
    <nav className="BottomNav">
        <Link to="/">main으로 가기</Link>
        <Link to="/junyeoung">준영으로 가기</Link>
        <Link to="/inkyu">인규로 가기</Link>
        <Link to="/sona">소나로 가기</Link>
        <Link to="/kanghyn">강현으로 가기</Link>
    </nav>
    );

}

export default BottomNav;