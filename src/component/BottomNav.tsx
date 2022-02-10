import React from "react"
import {Route,Link, Switch} from "react-router-dom"

const BottomNav = () => {
    return(
    <div>
    <ul>
        <li>
        <Link to="/">main으로 가기</Link>
        </li>
    <li>
    <Link to="/junyeoung">준영으로 가기</Link>
    </li>
    <li>
    <Link to="/inkyu">인규로 가기</Link>
    </li>
    <li>
    <Link to="/sona">소나로 가기</Link>
    </li>
    <li>
    <Link to="/kanghyn">강현으로 가기</Link>
    </li>
    </ul>
    
    </div>
    );

}

export default BottomNav;