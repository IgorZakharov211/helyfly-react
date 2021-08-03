import React from 'react';
import './Photo.css';

function Photo(props){
  return(
    <img className="photo" src={props.link} alt={props.name}></img>
  );
}

export default Photo;