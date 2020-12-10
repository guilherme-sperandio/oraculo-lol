import React from "react";
import Src from "../../assets/svg/src.svg";
import "./SrcBar.css";

function SrcBar() {
  return (
    <div className="srcBarContainer">
      <input
        className="SrcBar"
        name="summonerName"
        placeholder="Buscar invocador"
      />
      <img className="SrcSvg" src={Src} />
    </div>
  );
}

export default SrcBar;
