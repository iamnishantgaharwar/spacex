import axios from "axios";

const fetchRockets = async () => {
    try{
        const response = await axios.get('https://api.spacexdata.com/v3/rockets');
        return response.data;
    }
    catch (e) {
        throw new e('Failed to fetch rockets');
    }
};

export default fetchRockets