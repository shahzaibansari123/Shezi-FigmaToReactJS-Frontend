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
          <div style={{ marginLeft: "20%", marginTop: "1.25%" }}>
            <div className="main">
              <p style={{ marginTop: "10px" }}>PASS Price</p>
              <h2 className="txt">$1520.33</h2>
            </div>
            <div className="main">
              <p style={{ marginTop: "10px" }}>Market Cap</p>
              <h2 className="txt">$1520.33</h2>
            </div>
            <div className="main">
              <p style={{ marginTop: "10px" }}> Treasury Balance </p>
              <h2 className="txt">$1520.33</h2>
            </div>
            <div className="main">
              <p style={{ marginTop: "10px" }}>Backing per PASS </p>
              <h2 className="txt">$1520.33</h2>
            </div>
          </div>

          <div style={{ marginLeft: "17%", marginTop: "1%" }}>
            <div className="main">
              <p style={{ marginTop: "10px" }}>APR &nbsp; / &nbsp; EPR </p>
              <h2 className="txt">3280% &nbsp; 3%</h2>
            </div>
            <div className="main">
              <p style={{ marginTop: "10px" }}>Total Value Locked</p>
              <h2 className="txt">$1520.33</h2>
            </div>
            <div className="main">
              <p style={{ marginTop: "10px" }}>PASS Supply </p>
              <h2 className="txt">$1520.33</h2>
            </div>
            <div className="main">
              <p style={{ marginTop: "10px" }}>Current Index </p>
              <h2 className="txt">3.48x</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
