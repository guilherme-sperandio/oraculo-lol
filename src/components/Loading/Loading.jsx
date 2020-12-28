import Icon from "../../assets/png/wolf-icon.png";
import Level from "../../assets/svg/Simple-Border.svg";
import "./Loading.css";

function Flag({summonerData}) {
   
  console.log(summonerData);
  return (
    <div className="loadingBg">
      <div className="icon">
        <img className="borderLevel-blur" alt="" src={Level} />
        <img className="borderLevel" alt="" src={Level} />
        <img className="summonerIcon" alt="" src={Icon} />
      </div>
    </div>
  );
}
export default Flag;
