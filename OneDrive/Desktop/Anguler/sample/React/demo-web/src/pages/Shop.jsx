import React, { useState, useEffect } from 'react';
import {
  Grid,
  Button,
  Pagination,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/store';
import axios from 'axios';
import '../styles/Shop.css';

const Shop = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3001/products');
        setData(res.data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const itemsWithId = data.map((item, index) => ({
    ...item,
    id: item.id ?? index + 1,
  }));

  const handleAdd = (item) => {
    dispatch(addToCart(item));
  };

  const paginatedItems = itemsWithId.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (loading) {
    return (
      <div className="loading-container">
        <CircularProgress />
      </div>
    );
  }

  return (
    <>
      <Grid className="shop-card" container spacing={3} padding={3}>
        {paginatedItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card className="shop-card" elevation={3}>
              <CardContent className="card-content">
                <Typography variant="h5" className="product-name">
                  <b>{item.product_name}</b>
                </Typography>
                <Typography variant="h7" className="product-brand">
                  {item.brand}
                </Typography>
                <Typography variant="h6" className="product-price">
                 <b>Rs.{item.price}</b> 
                </Typography>
                <Typography variant="body2" className="product-desc">
                  {item.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAdd(item)}
                  className="add-button"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div className="pagination-container">
        <Pagination
          count={Math.ceil(itemsWithId.length / itemsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
          shape="rounded"
        />
      </div>
    </>
  );
};

export default Shop;
