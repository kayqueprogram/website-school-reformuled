import { collection,getDocs } from 'firebase/firestore';
import { db } from 'services/firebase-config';

//arrumar para mais security :) 
//lidar com erro 

async function getBlogPosts (){
    const postsCollectionRef = collection(db,"posts");
    const response = await getDocs(postsCollectionRef);
    const data = await response.docs?.map((doc)=> ({...doc.data(),id:doc.id}))
    return data;
}

export default getBlogPosts;