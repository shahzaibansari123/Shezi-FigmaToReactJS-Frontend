import React from "react";
import Button from "@mui/material/Button";
import "./MainContent.css";

const MainContent = () => {
  return (
    <>
      <div
        style={{
          display: "Block",
          textAlign: "right",
          justifyContent: "right",
          alignItems: "right",
        }}
      >
        <Button
          sx={{
            color: "white",
            backgroundColor: "#F89E1B",
            borderRadius: "50px",
            marginTop: "50px",
            marginRight: "20px",
            width: "7%",
          }}
        >
          Buy PASS
        </Button>
        <Button
          variant="outlined"
          sx={{
            border: "2px solid #F89E1B",
            color: "white",
            borderRadius: "50px",
            marginTop: "50px",
            marginRight: "50px",
            width: "12%",
          }}
        >
          Connect Wallet
        </Button>
      </div>
      <div style={{ textAlign: "center", marginLeft: "25%", marginTop: "1%" }}>
        <h1 style={{ color: "#F89E1B" }}>EPOCH STAKING</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginLeft: "25%", marginTop: "1%" }}>
            <div className="main">
              <p style={{ marginBottom: "0px" }}>PASS Price</p>{" "}
              <p classsName="txt">$1520.33</p>
            </div>
            <div className="main">
              <p>Market Cap</p> <p classsName="txt">$1520.33</p>
            </div>
            <div className="main">
              <p>Treasury Balance </p>
              <p classsName="txt">$1520.33</p>
            </div>
            <div className="main">
              <p>Backing per PASS </p>
              <p classsName="txt">$1520.33</p>
            </div>
          </div>
          <div style={{ marginLeft: "15%", marginTop: "1%" }}>
            <div className="main"><p>Treasury Balance </p>
              <p classsName="txt">$1520.33</p></div>
            <div className="main"><p>Treasury Balance </p>
              <p classsName="txt">$1520.33</p></div>
            <div className="main"><p>Treasury Balance </p>
              <p classsName="txt">$1520.33</p></div>
            <div className="main"><p>Treasury Balance </p>
              <p classsName="txt">$1520.33</p></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
