
import Level from "../../assets/svg/Simple-Border.svg";
import { ReactComponent as Cardimg } from '../../assets/svg/card.svg';
import "./Flag.css"


function Flag({summonerData}) {
    const flagSolo = summonerData.summoner.rank.find((currentItem) => {
        return currentItem.queueType === 'RANKED_SOLO_5x5';
    });
    
 
    return (
        <div className="flagCard">
                
        <Cardimg className="flag" />
        
        <h2 className="summonerName">{summonerData.summoner?.name}</h2>
        
        <div className="iconContainer">
            
             <div className="icon">
                <img className="borderLevel-blur" alt="" src={Level} />
                <img className="borderLevel" alt="" src={Level} />
                <img className="summonerIcon"  alt="" src={"https://api-lol-pecege.herokuapp.com"+summonerData.imageProfile} />
            </div>
            
            <p className="level">{summonerData.summoner?.summonerLevel}</p>
        
        </div>
        
        <img className="flagBorder" alt="" src={`https://api-lol-pecege.herokuapp.com${flagSolo ? flagSolo.flag : "/datadragon/ranked-flags/UNRANKED"}`} />
        </div>
    );
}
export default Flag;