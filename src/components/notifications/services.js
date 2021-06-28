import axios from 'axios'

async function getCount(){
    const response = await axios.get('http://localhost:3000/count');
    return response.data.num;
}

async function getNotifications(){
        const response = await axios.get('http://localhost:3000/notifications');
        console.log("response", response.data)
        return  response.data;
    
}

export {getCount, getNotifications}