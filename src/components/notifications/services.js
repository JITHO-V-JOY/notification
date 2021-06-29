import axios from '../../axios-index'

function getCount(callback){
    axios.get('/count').then((response, err)=>{
        if(err){
            throw err;
        }   
        if(response){
           callback(response.data.num, null)
        }
    }).catch((err)=> callback(null, err));
}


function getNotifications(callback){
    axios.get('/notifications').then((response, err)=>{
        if(err){
            throw err;
        }   
        if(response){
           callback(response.data, null)
        }
    }).catch((err)=> callback(null, err));
}

export {getCount, getNotifications}