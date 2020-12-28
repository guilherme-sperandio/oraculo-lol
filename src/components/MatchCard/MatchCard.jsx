import React from "react";
import video from "../../assets/webm/hover4.mp4";
import "./MatchCard.css";

function MatchCard({ videoId, matchData }) {
  function matchResult(data) {
    let result;
    if (data ===true) {
      result == "Vitória";
    } else {
      result == "Derrota";
    }
    return result;
  }

  function matchResultCss(data) {
    let result;
    if (data === true) {
      result == "win";
    } else {
      result =="lose";
    }
    return result;
  }

  function getHeroName(url) {
    return url.replace("/datadragon/splash/desktop/", "");
  }
  return (
    <li
      className="matchCard"
      onMouseOver={() => {
        let video = document.getElementById(videoId);
        video.play();
      }}
      onMouseOut={() => {
        let video = document.getElementById(videoId);
        video.pause();
      }}
    >
      <video
        width="980"
        height="140"
        className="hoverVideo"
        loop
        id={videoId}
        muted
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="matchDetail">
        <h1>{matchResult(matchData.data.win)}</h1>
        <h3>{getHeroName(matchData.champion.image.splashDesktop)}</h3>
      </div>

      <h2>{matchData.data.kda}</h2>

      <div
        className={"matchResultGradient " + matchResultCss(matchData.data.win)}
      ></div>
      <div className="fadeGradient"></div>
      <img
        className="heroBg"
        alt=""
        src={
          "https://api-lol-pecege.herokuapp.com" +
          matchData.champion.image.splashDesktop
        }
      />
    </li>
  );
}

export default MatchCard;
