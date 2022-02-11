import React from 'react';
import { Link } from 'react-router-dom';
import {numberBook} from '../Numberbook'; 
import type { FC } from "react";
import "../style.css";

const Page: FC<{ to: string }> = (props) => <div><Link {...props} /></div>; // prettier-ignore

function Main(){
    return (
    <div className="container">
        <div id="title">연락처</div>
        <div id="search">검색</div>
        <div className="number-list">
            {numberBook.map((number)=>{
            return (
                <div key={number.id}>
                    <Page to={`/${number.id}`}>{number.name}</Page>
                    <hr ></hr>
                </div>
            )})}
        </div>

    </div>
    )
}

export default Main;