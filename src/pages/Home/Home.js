import React from 'react';
import { useHistory } from "react-router-dom";
import Brand from "../../assets/svg/oraculo.svg";
import SrcBar from "../../components/SrcBar/SrcBar"
import './Home.css'

function Home() {
    const history = useHistory();
    function handleSubmit(summoner) {
        history.push(`/profile/${summoner}`);
    }
    return (
        <main className="homeBg">
            <div className="homeContainer">
                <a><img className="brandBig" src={Brand} /></a>
                <SrcBar onSubmit={handleSubmit}/>
            </div>

        </main>

    );
}

export default Home;