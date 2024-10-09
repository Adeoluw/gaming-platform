import React from "react";

export default function Games(props) {
  return (
    
      <div className="game">
        <img src={props.img} />
        <p>
          <a href={props.link}> {props.name}</a>
        </p>
      </div>
    
  );
}
