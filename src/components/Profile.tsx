import React from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import {numberBook} from '../Numberbook'; 
import "./style.css";

function Profile(){
    const navigate = useNavigate();
    const num = useParams();
    const target = numberBook.find(number => number.id === Number(num.id));

    return (
        <div className="container profile">
            <button className="back-btn" onClick={()=> navigate(-1)}>{"<연락처"}</button>
            <div className="profile-image">{target?.name.substring(0,1)}</div>
            <div className="profile-name">{target?.name}</div>
            <div className="profile-box">
                <label>휴대전화</label>
                <div className="profile-number">{target?.phone}</div>
            </div>
        </div>
    )
}

export default Profile;