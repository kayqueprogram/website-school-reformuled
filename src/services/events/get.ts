import { collection,getDocs } from 'firebase/firestore';
import { db } from 'services/firebase-config';

//arrumar para mais security :) 
//lidar com erro 

async function getEventsPosts (){
    const postsCollectionRef = collection(db,"events");
    const response = await getDocs(postsCollectionRef);
    const data = await response.docs?.map((doc)=> ({...doc.data(),id:doc.id}))
    return data;
}

export default {getEventsPosts};