import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from 'services/firebase-config';

interface AboutData {
  id: string;
  title: string;
  description: string;
}

async function getAbout(): Promise<AboutData[]> {
  const aboutCollectionRef = collection(db, "about");
  const response = await getDocs(aboutCollectionRef);
  const data = response.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as AboutData[];
  return data;
}

async function getAboutSchool(id: string): Promise<AboutData | undefined> {
  const aboutRef = doc(db, 'about', id);
  const aboutDoc = await getDoc(aboutRef);
  return aboutDoc.data() as AboutData | undefined;
}

export default { getAbout, getAboutSchool };