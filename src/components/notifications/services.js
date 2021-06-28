import axios from '../../axios-index'

async function getCount(){
    const response = await axios.get('/count');
    return response.data.num;
}

async function getNotifications(){
        const response = await axios.get('/notifications');
        console.log("response", response.data)
        return  response.data;
    
}

export {getCount, getNotifications}