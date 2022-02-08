import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const HeaderNav = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const goBack = () => navigate(-1);
  return (
    <>
      <button className="back-btn" onClick={goBack}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <span className="header-title">{id}</span>
      <button className="close-btn">
        <i className="fas fa-times"></i>
      </button>
    </>
  );
};

export default HeaderNav;
