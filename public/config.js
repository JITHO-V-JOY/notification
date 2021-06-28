const timeInterval = 1000;
import {getCount} from '../src/components/notifications/services'

function getNotificationCount(callback){
            setInterval(async () => {
                 let count = await getCount()
                 callback(count)
             }, timeInterval)
}


export{ getNotificationCount}