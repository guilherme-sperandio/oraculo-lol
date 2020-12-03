import React, { useState } from 'react';
import Logo from '../../assets/logo-lol.svg'
import {FiChevronRight} from 'react-icons/fi';
import {VscSearch} from 'react-icons/vsc';
import './styles.css'
import { useHistory } from 'react-router-dom';

function Home (){
    const history = useHistory();
    const [invocador, setInvocador] = useState("");

    function handleSubmit(){
        history.push('/profile', {invocador});
    }

    return(
        <div className="Main">
            <div className= "Container-Pesquisa">
                <img src={Logo}/>
                <div className= "Container-Form">
                   <form onSubmit={handleSubmit}>
                        <div className="Form-Input">
                            <VscSearch color="#CDBE91" size={22}/>
                            <input name="summonerName" placeholder="Buscar invocador" onChange={(event) => (setInvocador(event.target.value))}/>
                        </div>
                        <button type="submit">  <FiChevronRight color="#CDBE91" size={38} /></button>
                    </form> 
                </div>
            </div>
        </div>
       
    );
}

export default Home;