import React, { useState, useEffect } from 'react';
import { productsService } from '../../services';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const offset = 0;
  const limit = 40;

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    productsService
      .products(limit, offset, search)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>List Products</h1>
      {products.length !== 0 ? (
        products.map((data) => {
          return (
            <>
              <h2 key={data.id}>{data.name}</h2>
              <p key={data.id}>{data.description}</p>
              <p key={data.id}>{data.display_normal_price}</p>
            </>
          );
        })
      ) : (
        <p>no data</p>
      )}
    </div>
  );
};

export default Products;
