import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/header/header";
import Table from "../../components/table/table";
import "./page-wrapper.css";

const PageWrapper = (props) => {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <div style={{ width: "100%" }}>
        <Header />
        <Table />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default PageWrapper;
