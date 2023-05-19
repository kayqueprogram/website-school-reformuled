import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from 'services/firebase-config';


async function getAbout() {
    const aboutCollectionRef = collection(db, "about");
    const response = await getDocs(aboutCollectionRef);
    const data = await response.docs?.map((doc) => ({ ...doc.data(), id: doc.id }))
    return data;
}

async function getAboutSchool(id: string) {
    const aboutRef = doc(db, 'about', id);
    const aboutDoc = await getDoc(aboutRef);
    return aboutDoc.data()

}



export default { getAbout, getAboutSchool };