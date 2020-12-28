import React from 'react';
import { toast} from 'react-toastify';
import { useParams,useHistory } from "react-router-dom";
import axios from "axios";
import Brand from "../../assets/svg/oraculo.svg";
import './Profile.css';
import MatchHistory from '../../components/MatchHistory/MatchHistory';
import { useState, useEffect,useCallback } from 'react';
import SrcBar from "../../components/SrcBar/SrcBar"
import Flag from "../../components/Flag/Flag"
import Ranked from "../../components/Ranked/Ranked"
import Loading from "../../components/Loading/Loading"

function Profile() {

  const [loading, setLoading] = useState(true);
  const [summonerInfo, setSummonerInfo] = useState("");
  const {summoner} = useParams();

  const history = useHistory();
  function handleSubmit(summoner) {
    history.push(`/profile/${summoner}`);
    
  }
  const loadSummoner = useCallback(
    async () => {
      try {
          const response = await axios.get(`https://api-lol-pecege.herokuapp.com/summoner/${summoner}`);
          setSummonerInfo(response.data);
          setLoading(false)
      } catch (error) {    
        history.push('/');
        toast.dark("Invocador não encontrado, tente novamente!", {
          position: 'top-center',
        })
      }
    },
    [summoner,history],
  );
  
  useEffect(() => {
    setLoading(true);
    loadSummoner();
  }, [loadSummoner,summoner]);

 
  
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