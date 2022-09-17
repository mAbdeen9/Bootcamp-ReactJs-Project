import React from "react";

function Card(props) {
  return (
    <div className="card" style={{ width: "18rem", color: "black" }}>
      <img className="card-img-top" src={props.bizImage} alt="user" />
      <div className="card-body">
        <h5 className="card-title">{props.bizName}</h5>
        <p className="card-text">
          Phone: {props.bizPhone} <br />
          Address: {props.bizAddress}
        </p>
        <p className="card-text">{props.bizDescription}</p>
        <button onClick={props.handleEdit} className="btn btn-primary">
          Edit card
        </button>
        &nbsp;
        <button onClick={props.handleDel} className="btn btn-danger">
          Delete card
        </button>
      </div>
    </div>
  );
}

export default Card;
