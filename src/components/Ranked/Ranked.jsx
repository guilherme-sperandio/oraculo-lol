import Shield from "../../assets/png/Bronze-Rank.png";
import Shield2 from "../../assets/png/Silver-Rank.png";


function Card() {
  return (
    <div className="rankedContainer">
      <div className="rankedElo">
        <h2>SOLO/DUO</h2>
        <h3>Bronze IV</h3>
        <img className="rank" src={Shield} />
      </div>

      <div className="rankedElo">
        <h2>FLEX 5V5</h2>
        <h3>Prata III</h3>
        <img className="rank" src={Shield2} />
      </div>
    </div>
  );
}
export default Card;
