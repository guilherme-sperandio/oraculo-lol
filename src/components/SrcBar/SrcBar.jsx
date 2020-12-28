import React, { useState } from "react";
import Src from "../../assets/svg/src.svg";
import "./SrcBar.css";

function SrcBar({onSubmit}) {
  const [summoner, setSummoner] = useState("");
  console.log(summoner);
  return (
    <form className="srcBarContainer"
    onSubmit={(event) =>{
      event.preventDefault();
      onSubmit(summoner);
    }}>
      <input
        onChange={(event)=>{
          setSummoner(event.target.value)
        }}
        className="SrcBar"
        name="summonerName"
        placeholder="Buscar invocador"
      />
      <img alt="" className="SrcSvg" src={Src} />
    </form>
  );
}

export default SrcBar;
