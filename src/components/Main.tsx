import React from 'react';
import { Link } from 'react-router-dom';
import {numberBook} from '../Numberbook'; 
import "./style.css";

function Main(){
    return (
    <div className="container">
        <div id="title">연락처</div>
        <div id="search">검색</div>
        <div className="number-list">
            {numberBook.map((number)=>{
            return (
                <div key={number.id}>
                    <Link to="/profile">
                        <div className="number">{number.name}</div>
                    </Link>
                    <hr ></hr>
                </div>
            )})}
        </div>

    </div>
    )
}

export default Main;