import React, { useState, useEffect } from "react";
import WinRate from "../WinRate/WinRate";
import MatchCard from "../MatchCard/MatchCard";
import "./MatchHistory.css";

function MatchHistory({ summonerData }) {


  return (
    <div className="matchContainer">
      <WinRate winRate={summonerData.winRate} />
      <div className="matchHistoryContainer">
        <ul>
          {
             summonerData.matches.map(( matchData,index) => <MatchCard videoId={index} matchData={matchData} key={index}/>)
             
          }
     
        </ul>
      </div>
    </div>
  );
}

export default MatchHistory;
