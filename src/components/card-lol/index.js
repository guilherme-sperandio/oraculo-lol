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
import  RankImg  from '../../assets/rank.svg';

import './styles.css';

function Card(props){
    let eloBorderSolo;
    let verificaEloFlex;
    console.log( props.summoner.eloInfo[1]?.tier);
    const verificaSolo = props.summoner.eloInfo[1]?.tier;
    const verificaFlex = props.summoner.eloInfo[0]?.tier;
    if(verificaSolo == undefined){
        eloBorderSolo = 'UNRANKED'
    }
    else{
        eloBorderSolo = props.summoner.eloInfo[1]?.tier;
    }
    if(verificaFlex == undefined){
        verificaEloFlex = 'UNRANKED'
    } else{
        verificaEloFlex = props.summoner.eloInfo[0]?.tier;
    }

    console.log(props.summoner);

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
                    <h3>{eloBorderSolo} {props.summoner.eloInfo[1]?.rank}</h3>
                    <img className="rank" src={RankImg}/>
                </div>
                <div className="info-elo">
                    <h2>FLEX 5V5</h2>
                    <h3>{verificaEloFlex} {props.summoner.eloInfo[0]?.rank}</h3>
                    <img className="rank" src={RankImg}/>
                </div>
            </div>
        </main>
    );
}
export default Card;



