import React from 'react';
import { ReactComponent as Cardimg } from '../../assets/card.svg';
import BorderIcon  from '../../assets/borda.png';
import  Notrank  from '../../assets/Bordas/Default.png'
import  Iron  from '../../assets/Bordas/Iron.png'
import  Bronze  from '../../assets/Bordas/Bronze.png'
import  Silver  from '../../assets/Bordas/Silver.png'
import  Gold  from '../../assets/Bordas/Gold.png'
import  Platinum from '../../assets/Bordas/Platinum.png'
import  Diamond  from '../../assets/Bordas/Diamond.png'
import  Master  from '../../assets/Bordas/Master.png'
import  GrandMaster  from '../../assets/Bordas/GrandMaster.png'
import  Challenger  from '../../assets/Bordas/Challenger.png'


import  Unranked  from '../../assets/escudo/Provisional.png'
import  IronShield  from '../../assets/escudo/Iron_1.png'
import  IronShield_2  from '../../assets/escudo/Iron_2.png'
import  IronShield_3 from '../../assets/escudo/Iron_3.png'
import  IronShield_4  from '../../assets/escudo/Iron_4.png'
import  BronzeShield  from '../../assets/escudo/Bronze_1.png'
import  BronzeShield_2  from '../../assets/escudo/Bronze_2.png'
import  BronzeShield_3  from '../../assets/escudo/Bronze_3.png'
import  BronzeShield_4  from '../../assets/escudo/Bronze_4.png'
import  SilverShield  from '../../assets/escudo/Silver_1.png'
import  SilverShield_2  from '../../assets/escudo/Silver_2.png'
import  SilverShield_3  from '../../assets/escudo/Silver_3.png'
import  SilverShield_4  from '../../assets/escudo/Silver_4.png'
import  GoldShield  from '../../assets/escudo/Gold_1.png'
import  GoldShield_2  from '../../assets/escudo/Gold_2.png'
import  GoldShield_3  from '../../assets/escudo/Gold_3.png'
import  GoldShield_4  from '../../assets/escudo/Gold_4.png'
import  PlatinumShield  from '../../assets/escudo/Platinum_1.png'
import  PlatinumShield_2  from '../../assets/escudo/Platinum_2.png'
import  PlatinumShield_3  from '../../assets/escudo/Platinum_3.png'
import  PlatinumShield_4  from '../../assets/escudo/Platinum_4.png'
import  DiamondShield  from '../../assets/escudo/Diamond_1.png'
import  DiamondShield_2  from '../../assets/escudo/Diamond_2.png'
import  DiamondShield_3  from '../../assets/escudo/Diamond_3.png'
import  DiamondShield_4  from '../../assets/escudo/Diamond_4.png'
import  MasterShield  from '../../assets/escudo/master.png'
import  GrandMasterShield  from '../../assets/escudo/grandmaster.png'
import  ChallengerShield  from '../../assets/escudo/challenger.png'

import './styles.css';

function Card(props){
    let eloBorderSolo;
    let verificaEloFlex;
    let verificaSolo;
    let verificaFlex;
    let SoloShield;
    let FlexShield;
    let verificaShield;
    let verficaFlexShield;
    
    verificaSolo = props.summoner.eloInfo.find((currentItem) => {
       if(currentItem.queueType === 'RANKED_SOLO_5x5'){
        return currentItem;
       }
    });
    verificaFlex = props.summoner.eloInfo.find((currentItem) => {
        if(currentItem.queueType === 'RANKED_FLEX_SR'){
         return currentItem;
        }
     });

    if(verificaSolo?.tier == undefined){
        eloBorderSolo = 'UNRANKED'
        SoloShield = 1;
    }
    else{
        eloBorderSolo = verificaSolo.tier;
        
        verificaShield = verificaSolo.rank;
        if(verificaShield == "I"){
           SoloShield = 1;
        }
        else if(verificaShield == "II"){
            SoloShield = 2;
        }
        else if(verificaShield == "III"){
            SoloShield = 3;
        }else{
            SoloShield = 4;
        }
    
    }
 
    if(verificaFlex?.tier == undefined){
        verificaEloFlex = 'UNRANKED'
        FlexShield = 1;
    } else{
        verificaEloFlex = verificaFlex.tier;
        verficaFlexShield = verificaFlex.rank;
        if(verficaFlexShield == "I"){
            FlexShield = 1;
        }
        else if(verficaFlexShield == "II"){
            FlexShield = 2;
        }
        else if(verficaFlexShield == "III"){
            FlexShield = 3;
        }else{
            FlexShield = 4;
        }
    }
  
    

    const borders= {
        UNRANKED:{primary: Notrank},
        IRON:{primary: Iron},
        BRONZE: {primary: Bronze},
        SILVER: {primary: Silver},
        GOLD: {primary: Gold},
        PLATINUM: {primary: Platinum},
        DIAMOND: {primary: Diamond},
        MASTER: {primary: Master},
        GRANDMASTER: {primary: GrandMaster},
        CHALLENGER: {primary: Challenger}
    }

    const escudos = {
        UNRANKED:{1: Unranked},
        IRON:{1: IronShield, 2: IronShield_2, 3: IronShield_3,4: IronShield_4},
        BRONZE: {1: BronzeShield,2: BronzeShield_2, 3: BronzeShield_3,4: BronzeShield_4},
        SILVER: {1: SilverShield,2: SilverShield_2, 3: SilverShield_3,4: SilverShield_4},
        GOLD: {1: GoldShield,2: GoldShield_2, 3: GoldShield_3,4: GoldShield_4},
        PLATINUM: {1: PlatinumShield,2: PlatinumShield_2, 3: PlatinumShield_3,4: PlatinumShield_4},
        DIAMOND: {1: DiamondShield,2: DiamondShield_2, 3: DiamondShield_3,4: DiamondShield_4},
        MASTER: {1: MasterShield},
        GRANDMASTER: {1: GrandMasterShield},
        CHALLENGER: {1: ChallengerShield}
    }


    
    return (
        <main>
            <div id="container-card">
                <div id="card-bg">
                    <Cardimg/>
                    <h2>{props.summoner.summonerInfo.name}</h2>
                    <p>{props.summoner.summonerInfo.summonerLevel}</p>
                    <img id="icon"src={`http://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${props.summoner.summonerInfo.profileIconId}.png`}/>
                    <img id="border-icon" src={BorderIcon}/>
                    <img id="border" src={borders[eloBorderSolo].primary}/>
                </div>
            </div>
            <div id="container-elo">
                <div className="info-elo">
                    <h2>SOLO/DUO</h2>
                    <h3>{eloBorderSolo} {verificaSolo?.rank}</h3>
                    <img className="rank" src={escudos[eloBorderSolo]?.[SoloShield]}/>
                </div>
                <div className="info-elo">
                    <h2>FLEX 5V5</h2>
                    <h3>{verificaEloFlex} {verificaFlex?.rank}</h3>
                    <img className="rank" src={escudos[verificaEloFlex]?.[FlexShield]}/>
                </div>
            </div>
        </main>
    );
}
export default Card;



