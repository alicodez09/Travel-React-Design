import './Destination';
import React from 'react';

export default function DestinationData(props) {
  return (
    <>
      <div className={props.cName}>
        <div className="desc-text">
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
        </div>
        <div className="image animated">
            <img src={props.src1} alt="" />
            <img src={props.src2} alt="" />
        </div>
      </div>
    </>
  )
}
