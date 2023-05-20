import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase-config';

const About = () => {
  const [aboutData, setAboutData] = useState<any>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const docRef = doc(db, 'about', 'Yb4n7VvmKN4fcUUaFKKZ');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setAboutData(docSnap.data());
        } else {
          console.log('O documento não existe');
        }
      } catch (error) {
        console.error('Erro ao buscar dados do Firebase:', error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div>
      {aboutData ? (
        <>
          <h2>{aboutData.title}</h2>
          <p>{aboutData.description}</p>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default About;
