import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {PRODUCT_CATEGORIES} from '../../constants/categories';
import {SPECIALTY_ITEMS} from '../../constants/specialtyItems';
const SpecialtyItems = () => {
  return (
    <Container id={PRODUCT_CATEGORIES[3].id} className='anchor' style={{marginBottom: '20px'}}>
      <h1 className='Title' style={{marginTop: '10px', marginBottom: '10px'}}>{PRODUCT_CATEGORIES[3].name}</h1>
      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {SPECIALTY_ITEMS.map((item) => (
          <Col key={item.id}>
            <Card className='h-100'>
              <Card.Img variant="top" src={item.images} alt={item.name}/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text style={{marginBottom: '5px'}}>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default SpecialtyItems;