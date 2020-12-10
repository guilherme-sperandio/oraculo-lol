import React from 'react';
import Brand from "../../assets/svg/oraculo.svg";
import SrcBar from "../../components/SrcBar/SrcBar"
import './Home.css'

function Home() {
    return (
        <main className="bg">
            <div className="homeContainer">
                <a><img className="brandBig" src={Brand} /></a>
                <SrcBar />
            </div>

        </main>

    );
}

export default Home;