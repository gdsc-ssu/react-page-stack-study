import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavContext } from '../globalState/NavContext';

const HeaderNav = () => {
  const { id } = useParams();
  const { moveBack } = useNavContext();

  return (
    <>
      <button className="back-btn" onClick={moveBack}>
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
