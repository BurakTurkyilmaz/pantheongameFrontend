import React from "react";
import starIcon from "../../data/icons/starIcon.png";
import greyStar from "../../data/icons/greyStar.png";
import frenchFlag from "../../data/icons/frenchFlag.png";
import usFlag from "../../data/icons/usFlag.png";
import upVote from "../../data/icons/upVote.jpeg";
import downVote from "../../data/icons/downVote.jpeg";
import noChange from "../../data/icons/noChange.jpeg";

function starCounter(props) {
  const starArray = [];
  for (let i = 0; i < props.appstar; i++)
    starArray.push(<img height="15px" width="15px" src={starIcon}></img>);
  for (let j = 0; j < 5 - props.appstar; j++)
    starArray.push(<img height="15px" width="15px" src={greyStar}></img>);
  return starArray;
}
function flagSelector(props) {
  if (props.appflag === "US") {
    return <img height="%100" width="100%" src={usFlag}></img>;
  } else if (props.appflag === "FR") {
    return <img height="100%" width="100%" src={frenchFlag}></img>;
  }
}
function rankChange(props) {
  if (props.rankChange > 0) {
    return (
      <div
        style={{
          color: "green",
          display: "flex",
          fontWeight: "bold",
        }}
      >
        <div style={{ marginTop: "7px", marginRight: "3px" }}>
          {props.rankChange}
        </div>
        <img height="30px" width="30px" src={upVote}></img>
      </div>
    );
  } else if (props.rankChange === 0) {
    return (
      <div style={{ color: "yellow", display: "flex", fontWeight: "bold" }}>
        <div style={{ marginTop: "0px", marginRight: "5px" }}>
          {props.rankChange}
        </div>
        <img height="20px" width="30px" src={noChange}></img>
      </div>
    );
  } else if (props.rankChange < 0) {
    return (
      <div style={{ color: "red", display: "flex", fontWeight: "bold" }}>
        <div style={{ marginTop: "7px", marginRight: "3px" }}>
          {props.rankChange}
        </div>
        <img height="30px" width="30px" src={downVote}></img>
      </div>
    );
  }
}

function Tablerow(props) {
  return (
    <div className="table-row">
      <div className="table-part-left">
        <div>{props.index + 1}</div>
      </div>
      <div className="table-part-middle">
        <div style={{ display: "flex" }}>
          <div className="app-icon">
            <img
              style={{ borderRadius: "10px" }}
              height="100%"
              width="100%"
              src={props.icon}
              alt=""
            ></img>
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ marginTop: "5px" }} className="app-name">
              {props.appname}
            </div>
            <div style={{ display: "flex", marginTop: "3px" }}>
              <div className="app-flag">{flagSelector(props)}</div>
              <div className="app-publisher">{props.apppublisher}</div>
              <div className="app-star">{starCounter(props)}</div>
              <div className="app-vote">(1.234)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-part-right">{rankChange(props)}</div>
    </div>
  );
}

export default Tablerow;
