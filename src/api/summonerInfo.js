import axios from 'axios';
async function  loadSummoner(nickName,setSummoner,setLoading){
    try{
        const response = await axios.get(`http://localhost:4567/?summonerName=${nickName}`);
        setSummoner(response.data);
        setLoading(false)
    }catch(error){
        console.error();
    }
}

export default loadSummoner;