const timeInterval = 1000;
import {getCount} from '../src/components/notifications/services'

function getNotificationCount(callback){
            setInterval(() => {
                 getCount().then((count, err)=>{
                     if(err){
                         throw err;
                     }else{
                        callback(count)
                     }
                 }).catch((err)=> console.log("hello", err))
             }, timeInterval)
}

const notificationType = "PULL";

export{ getNotificationCount, notificationType}