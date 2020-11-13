import React from 'react';

function News(props) {
  const { news } = props;
  const dateTime = new Date(news.date);
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const date = dateTime
    .getDate()
    .toString()
    .concat(' ', monthNames[dateTime.getMonth()], ' ', dateTime.getFullYear());

  return (
    <div>
      <h2 className="date-heading">{date}</h2>
      <div className="cards">
        {news.activity.map((data, index) => {
          return (
            <div>
              <h3>{data.title}</h3>
              <p>{data.desc}</p>
              <a href={data.url}>{data.url}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default News;
