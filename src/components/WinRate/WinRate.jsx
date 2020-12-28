import React,{useMemo} from "react";
import "./WinRate.css";

function WinRate({ winRate }) {

  const loseWidth = useMemo(() => {
    return 100 - winRate + "%"
  },[winRate])

  const winWidth = useMemo(() => {
    return winRate + "%"
  },[winRate])

  return (
    <div className="winRateContainer">
      <div className="winRateInfo">
        <h2 className="winRateTitle" style={{width:winWidth}}>Win Rate</h2>
        <h2 className="rate">{winRate}%</h2>
      </div>
      <div className="rateBar">
        <div className="victories"  style={{width:winWidth}}></div>
        <div className="defeats" style={{width:loseWidth}}></div>
      </div>
    </div>
  );
}

export default WinRate;

