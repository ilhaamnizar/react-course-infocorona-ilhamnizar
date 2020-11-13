import React, { useEffect, useState } from 'react';
import app from '../../services/firebase';
import Pagination from '../Pagination';
import News from './news';
import 'firebase/database';

const CoronaNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data.reverse());
    });
  }, []);
  console.log(news);

  const daysPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastNews = currentPage * daysPerPage;
  const indexOfFirstNews = indexOfLastNews - daysPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2>data corona</h2>
      {news.length !== 0 ? (
        currentNews.map((data) => {
          return <News news={data} key={data.id} />;
        })
      ) : (
        <p>no data</p>
      )}
      {/* {news.map((data) => {
        return <p>{data}</p>;
      })} */}
      <br />
      <Pagination
        daysPerPage={daysPerPage}
        totalDays={news.length}
        paginate={paginate}
      />
      <br />
    </div>
  );
};

export default CoronaNews;
