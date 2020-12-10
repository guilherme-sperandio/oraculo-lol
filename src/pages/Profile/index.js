import React from 'react';
import Brand from "../../assets/svg/oraculo.svg";
import Src from "../../assets/svg/src.svg";
import './styles.css';
import Card from '../../components/card-lol/index';
import MatchHistory from '../../components/match-history/index';
import { useState, useEffect } from 'react';
import loadSummoner from '../../api/summonerInfo';
import SrcBar from "../../components/SrcBar/SrcBar"

function Profile({ location }) {
  const [loading, setLoading] = useState(false);
  const [summoner, setSummoner] = useState({});

  //   useEffect(()=> {
  //    loadSummoner(location.state.invocador,setSummoner,setLoading);
  //  },[loadSummoner]);

  return (
    <>
      {loading ? (
        <div>...carregando</div>
      ) : (
          <section className="bg">

            <header className="logo">
              <a href="/"><img className="Brand-Header" src={Brand} /></a>
              <SrcBar />
            </header>

            <main className="mainProfileContainer">

              <Card summoner={summoner} />
              <MatchHistory />

            </main>

          </section>
        )}
    </>
  );
}

export default Profile;