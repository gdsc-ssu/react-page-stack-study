import React from 'react';
import {Link,useParams} from 'react-router-dom';
import {numberBook} from '../Numberbook'; 
import type { FC } from "react";
import "../style.css";

const Page: FC<{ to: string }> = (props) => <div><Link {...props} /></div>; // prettier-ignore

function Profile(){
    const num = useParams();
    const target = numberBook.find(number => number.id === Number(num.id));

    return (
        <div className="container profile">
            <Page to="/"><button className="back-btn">{"<연락처"}</button></Page>
            <div className="profile-info image">{target?.name.substring(0,1)}</div>
            <div className="profile-info name">{target?.name}</div>
            <div className="profile-box">
                <label>휴대전화</label>
                <div className="number">{target?.phone}</div>
            </div>
        </div>
    )
}

export default Profile;