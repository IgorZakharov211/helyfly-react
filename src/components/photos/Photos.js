import React from 'react';
import './Photos.css';
import Photo from '../photo/Photo';
import initialPhotos from '../../utils/initialPhotos';

function Photos(){
  return(
    <section className="photos content__photos">
      <h2 className="photos__title">Фотографии пакета</h2>
      <div className="photos__container">{
        initialPhotos.map(({name, link}) => { 
          return <Photo name = {name} link ={link}/>
      })
      }
      </div>
      <a className="photos__show-all">Показать все фото</a>
    </section>
  );
}

export default Photos;