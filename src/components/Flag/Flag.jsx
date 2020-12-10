
import Icon from "../../assets/png/wolf-icon.png";
import Level from "../../assets/svg/Simple-Border.svg";
import FlagBorder from "../../assets/border/Bronze.png";
import { ReactComponent as Cardimg } from '../../assets/svg/card.svg';
import "./Flag.css"


function Flag() {

    return (
        <div className="flagCard">
                
        <Cardimg className="flag" />
        
        <h2 className="summonerName">Mefeu</h2>
        
        <div className="iconContainer">
            
             <div className="icon">
                <img className="borderLevel-blur" src={Level} />
                <img className="borderLevel" src={Level} />
                <img className="summonerIcon" src={Icon} />
            </div>
            
            <p className="level">106</p>
        
        </div>
        
        <img className="flagBorder" src={FlagBorder} />
        </div>
    );
}
export default Flag;