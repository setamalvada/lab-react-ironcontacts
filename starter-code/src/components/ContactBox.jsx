import React from "react";
import contacts from "../contacts.json";

const ContacBox = (props) => {
  return (
    <div className="">
      <tr>
        <td>
          <img src={props.pictureUrl} />
        </td>
        <td>{props.name}</td>
        <td>{props.popularity}</td>
      </tr>
    </div>
  );
};

export default ContacBox;
