import { collection, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';


async function getAbout() {
  try {
    const postRef = doc(db,'about','Yb4n7VvmKN4fcUUaFKKZ');
    const postDoc = await getDoc(postRef);
    return postDoc.data()
  } catch (error) {
    console.error('Erro ao buscar :', error);
    return [];
  }
}

// Função para buscar um post específico
async function getAboutContent(id: string) {
  try {
    const postRef = doc(db, 'about', id);
    const postDoc = await getDoc(postRef);
    
    if (postDoc.exists()) {
      // Documento encontrado, você pode acessar os dados usando postDoc.data()
      const data = postDoc.data();
      return data;
    } else {
      console.log('Documento não encontrado');
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar o post:', error);
    return null;
  }
}

export default { getAbout, getAboutContent };
