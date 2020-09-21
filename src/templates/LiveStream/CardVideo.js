import React, { Component } from "react";
import ReactPlayer from 'react-player'

const CardVideo = (props) => {
  const{url} = props
  const config ={

  }
  return (
    <div className="video">
      <ReactPlayer url={url} width={1212} height={720} playing= {false} config={config} controls = {true}/>
    </div>
  );
};
export default CardVideo;
