
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
        <h2>{rankSolo.queueType.replace(/_/gm," ").replace("RANKED","")}</h2>
        <h3>{rankSolo.tier +" "+ rankSolo.rank}</h3>
        <img alt="" src={"https://api-lol-pecege.herokuapp.com"+rankSolo.emblem} />
      </div>

      <div className="rankedElo">
      <h2>{rankFlex.queueType.replace(/_/gm," ").replace("RANKED","")}</h2>
        <h3>{rankFlex.tier +" "+ rankFlex.rank}</h3>
        <img alt="" src={"https://api-lol-pecege.herokuapp.com"+rankFlex.emblem} />
      </div>
    </div>
  );
}
export default Ranked;
