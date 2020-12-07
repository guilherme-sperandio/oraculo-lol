import React from 'react';
import Logo from '../../assets/logo-lol.svg';
import {VscSearch} from 'react-icons/vsc';
import './styles.css';
import Card from '../../components/card-lol/index';
import MatchHistory from '../../components/match-history/index';
import { useState,useEffect } from 'react';
import loadSummoner from '../../api/summonerInfo';

function Profile({location}) {
  const [loading, setLoading] = useState(true);
  const [summoner,setSummoner] = useState({});
  const [nickName, setNickName] = useState();
  
  useEffect(() => {
    loadSummoner(location.state.invocador, setSummoner, setLoading);
  }, []);

  function loadInfo(event) {
    event.preventDefault();
    setLoading(true);
    loadSummoner(nickName, setSummoner, setLoading);
    const input = document.querySelector('input');
    input.value = '';
  }

    return (
      <>
      {loading ? (
        <div>...carregando</div>
      ) : (
        <div className="profile-container">
          <header>
            <div className="logo">
              <img src={Logo}/>
            </div>
            <div className="form-container">
              <div className="form-input">
                <VscSearch color="#CDBE91" size={18}/>
                <form onSubmit={loadInfo}>
                  <input
                    placeholder="Buscar invocador"
                    onChange={(event) => setNickName(event.target.value)}
                  />
                </form>
              </div>
            </div>
          </header>
          <main>
            <div id="teste">
              <div className="left-side-info">
                <Card summoner={summoner}/>
              </div>
              <div className="right-side-info">
                <MatchHistory/>
              </div>
            </div>
          </main>
        </div>
      )}  
    </>
    );
  }
  
  export default Profile;