import { collection,doc,getDocs,getDoc} from 'firebase/firestore';
import { db } from 'services/firebase-config';

//arrumar para mais securityyyyy
//lidar com erro 

async function getGalleryCollections(){
    const postsCollectionRef = collection(db,'gallery');
    const response = await getDocs(postsCollectionRef);
    const data = await response.docs?.map((doc)=> ({...doc.data(),id:doc.id}))
    return data;
}

async function getGalleryById(id:string) {
   const postRef = doc(db,'gallery',id);
   const postDoc = await getDoc(postRef);
   return postDoc.data();
}



export default {getGalleryCollections,getGalleryById};