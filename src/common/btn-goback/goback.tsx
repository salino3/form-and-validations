import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './goback.styles';

export const GoBack: React.FC = () => {

  const navigate = useNavigate();

function handleClick() {
    return navigate(-1);
};

  return (
    <div className={classes.Link} onClick={handleClick}>Go Back</div>
  )
}
