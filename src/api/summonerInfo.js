import axios from 'axios';
async function loadSummoner(nickName, setSummoner, setLoading) {
    try {
        const response = await axios.get(`https://api-lol-pecege.herokuapp.com/summoner/${nickName}`);
        setSummoner(response.data);
        setLoading(false)
    } catch (error) {
        console.error();
    }
}

export default loadSummoner;