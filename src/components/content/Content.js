import React from 'react';
import './Content.css';
import Intro from '../intro/Intro';
import Features from '../features/Features';
import Photos from '../photos/Photos';
import Author from '../author/Author';
import Record from '../record/Record';
import Map from '../map/Map';
import Place from '../place/Place';
import Reviews from '../reviews/Reviews';

function Content(){
  return(
    <main className="content">
      <Intro />
      {/* <Features /> */}
      <Photos />
      <Author />
      <Record />
      <Map />
      <Place />
      <Reviews />
    </main>
  );
}

export default Content;