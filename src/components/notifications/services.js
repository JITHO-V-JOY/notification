import axios from 'axios'
import {URL} from '../../../public/config/notification'

function getCount(callback){
    axios.get(`${URL}/count`).then((response, err)=>{
        if(err){
            throw err;
        }   
        if(response){
           callback(response.data.num, null)
        }
    }).catch((err)=> callback(null, err));
}


function getNotifications(callback){
    axios.get(`${URL}/notifications`).then((response, err)=>{
        if(err){
            throw err;
        }   
        if(response){
           callback(response.data, null)
        }
    }).catch((err)=> callback(null, err));
}

export {getCount, getNotifications}
