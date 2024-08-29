import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/products-slice';
import { addToCart } from '../rtk/slices/cart-slice'; // Fix: Correct import

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container className='my-5'>
      <Row className='py-5'>
        {products.map((product) => (
          <Col key={product.id} className='mt-3 mb-2'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product.image} style={{ height: '300px' }} />
              <Card.Body>
                <Card.Title>{product.title.slice(0, 20)}</Card.Title>
                <Card.Text>{product.description.slice(0, 55)}</Card.Text>
                <Card.Text>{product.price}$</Card.Text>
                <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;