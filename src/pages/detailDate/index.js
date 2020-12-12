import React, { useState, useEffect } from 'react';
import app from '../../services/firebase';
import 'firebase/database';

const DetailDate = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setIsLoading(false);
    })
  }, []);

  return (
    <div>
      <h2> Info Corona Detail </h2>
    </div>
  );
};