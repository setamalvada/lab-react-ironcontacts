import React from "react";

const ContacBox = (props) => {
  return (
    <div class="line">
      <div>
        <img src={props.pictureUrl} alt="imagen" />
      </div>
      <div>{props.name}</div>
      <div>{props.popularity.toFixed(2)}</div>
    </div>
  );
};

export default ContacBox;
