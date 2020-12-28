import React from 'react';
import"./Ranked.css"

function Ranked({summonerData}) {

    const rankSolo = summonerData.summoner.rank.find((currentItem) => {
        return currentItem.queueType === 'RANKED_SOLO_5x5';
    });
    const rankFlex = summonerData.summoner.rank.find((currentItem) => {
        return currentItem.queueType === 'RANKED_FLEX_SR'; 
    });
   
  
   
  return (
    <div className="rankedContainer">
      <div className="rankedElo">
        <h2>{rankSolo ? rankSolo.queueType.replace(/_/gm," ").replace("RANKED","") : "RANKED SOLO"}</h2>
        <h3>{rankSolo ? rankSolo.tier +" "+ rankSolo.rank : "UNRANKED" }</h3>
        <img alt="" src={`https://api-lol-pecege.herokuapp.com${rankSolo ? rankSolo.emblem : "/datadragon/ranked-emblems/UNRANKED" }`} />
      </div>

      <div className="rankedElo">
      <h2>{rankFlex ? rankFlex.queueType.replace(/_/gm," ").replace("RANKED","") : "RANKED FLEX" }</h2>
        <h3>{ rankFlex ? rankFlex.tier +" "+ rankFlex.rank : "UNRANKED"  }</h3>
        <img alt="" src={`https://api-lol-pecege.herokuapp.com${rankFlex ? rankFlex.emblem : "/datadragon/ranked-emblems/UNRANKED" }`} />
      </div>
    </div>
  );
}
export default Ranked;
