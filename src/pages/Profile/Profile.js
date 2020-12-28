import React from 'react';
import { useParams,useHistory } from "react-router-dom";
import Brand from "../../assets/svg/oraculo.svg";
import './Profile.css';
import MatchHistory from '../../components/MatchHistory/MatchHistory';
import { useState, useEffect } from 'react';
import loadSummoner from '../../api/summonerInfo';
import SrcBar from "../../components/SrcBar/SrcBar"
import Flag from "../../components/Flag/Flag"
import Ranked from "../../components/Ranked/Ranked"
import Loading from "../../components/Loading/Loading"

function Profile() {
  const history = useHistory();
  function handleSubmit(summoner) {
    history.push(`/profile/${summoner}`);
    
  }

  const {summoner} = useParams();

  const [loading, setLoading] = useState(true);
  const [summonerInfo, setSummonerInfo] = useState("");

  useEffect(() => {
    setLoading(true);
    loadSummoner(summoner, setSummonerInfo, setLoading);
  }, [summoner]);

  
  return (
    <>
      {loading ? (
        <Loading  summonerData={summonerInfo}/>
      ) : (
          <section className="profileBg">
            <div className="profileContainer">

              <header className="profileHeader">
                <a href="/"><img className="brandHeader" alt="" src={Brand} /></a>

                <div className="profileSrcBar">
                  <SrcBar onSubmit={handleSubmit}/>
                </div>
              </header>

              <main className="profileMainContainer">

                <section className="profileLeftColum">
                  <Flag summonerData={summonerInfo} />
                  <Ranked summonerData={summonerInfo} />
                </section>

                <section className="profileMatchHistory">
                  <MatchHistory summonerData={summonerInfo} />
                </section>

              </main>
            </div>
          </section>
        )}
    </>
  );
}

export default Profile;