import React from 'react';
import './styles.css';
import  Icon  from '../../assets/yasuo.svg';

function MatchHistory(){
    return(
        <div id="container-match">
            <div id="win-rate">
                <div id="info-winrate">
                    <h2>WIN RATE</h2>
                    <h2>60%</h2>
                </div>
              
                <div id="losses">
                    
                    <div id="win">
                       a
                    </div>
                    
                </div>
            </div>
            <div id="match-history">
                <form>
                    <ul id="history">
                        <li className="history-info">
                            <div className="bg-img"></div>
                            <h1>V I T Ó R I A</h1>
                            <div className="color">a</div>
                            <img src={Icon}/>
                            <h3>Yasuo</h3>
                            <p>35:29</p>
                            
                        </li>
                        <li className="history-info">
                            <div className="bg-img"></div>
                            <h1>D E R R O T A</h1>
                            <div className="color">a</div>
                            <img src={Icon}/>
                            <h3>Yasuo</h3>
                            <p>35:29</p>
                            <h2>11/29/1</h2>
                        </li>
                        <li className="history-info">
                            <div className="bg-img"></div>
                            <h1>V I T Ó R I A</h1>
                            <div className="color">a</div>
                            <img src={Icon}/>
                            <h3>Yasuo</h3>
                            <p>35:29</p>
                            <h2>11/29/1</h2>
                        </li>
                        <li className="history-info">
                            <div className="bg-img"></div>
                            <h1>V I T Ó R I A</h1>
                            <div className="color">a</div>
                            <img src={Icon}/>
                            <h3>Yasuo</h3>
                            <p>35:29</p>
                            <h2>11/29/1</h2>
                        </li>
                        <li className="history-info">
                            <div className="bg-img"></div>
                            <h1>V I T Ó R I A</h1>
                            <div className="color">a</div>
                            <img src={Icon}/>
                            <h3>Yasuo</h3>
                            <p>35:29</p>
                            <h2>11/29/1</h2>
                        </li>
                        <li className="history-info">
                            <div className="bg-img"></div>
                            <h1>V I T Ó R I A</h1>
                            <div className="color">a</div>
                            <img src={Icon}/>
                            <h3>Yasuo</h3>
                            <p>35:29</p>
                            <h2>11/29/1</h2>
                        </li>
                        <li className="history-info">
                            <div className="bg-img"></div>
                            <h1>V I T Ó R I A</h1>
                            <div className="color">a</div>
                            <img src={Icon}/>
                            <h3>Yasuo</h3>
                            <p>35:29</p>
                            <h2>11/29/1</h2>
                        </li>
                        <li className="history-info">
                            <div className="bg-img"></div>
                            <h1>V I T Ó R I A</h1>
                            <div className="color">a</div>
                            <img src={Icon}/>
                            <h3>Yasuo</h3>
                            <p>35:29</p>
                            <h2>11/29/1</h2>
                        </li>

                    </ul>
                </form>
            </div>  
        </div>
    );
}

export default MatchHistory;