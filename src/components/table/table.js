import React from "react";
import Tablerow from "./tablerow";
import appSuggestions from "../../data/appSuggestions";
import topChart from "../../data/topChart";
import "./table.css";

function createTable(appSuggest, index) {
  return (
    <Tablerow
      key={appSuggest.id}
      index={index}
      appname={appSuggest.name}
      apppublisher={appSuggest.publisher}
      appstar={appSuggest.rating}
      appflag={appSuggest.country}
      rankChange={appSuggest.rankChange}
      icon={appSuggest.iconName}
    />
  );
}

function Table() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="table">
          <div className="table-header">
            <div className="table-text">Top Charts</div>
          </div>
          <div>{appSuggestions.map(createTable)}</div>
        </div>
        <div className="table" style={{ marginLeft: "60px" }}>
          <div className="table-header">
            <div className="table-text">Tracked Apps</div>
          </div>
          <div>{appSuggestions.map(createTable)}</div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="table">
          <div className="table-header">
            <div className="table-text">App Suggestions</div>
          </div>
          <div>{appSuggestions.map(createTable)}</div>
        </div>
        <div className="table" style={{ marginLeft: "60px" }}></div>
      </div>
    </div>
  );
}

export default Table;
