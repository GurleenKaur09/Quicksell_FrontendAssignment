import React from 'react'
import data from './data.json'
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function JsonDataDisplay(){
	const DisplayData=data.map(
		(info)=>{
			return(
                <div className="App">  
                <Row xs={1} md={2} className='g-4'> 
                <Col md='4'>
                    <Card className='mb-4' style={{width: '20rem', marginLeft: '20px'}}>
                        <Card.Body>
                            <Card.Title style={{color: 'GrayText'}}>{info.id}</Card.Title>
                            <Card.Subtitle>{info.title}</Card.Subtitle>
                            <Card.Text style={{color: 'GrayText'}}>{info.tag}</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </div>
			)
		}
	)

	return(
		<div>
			{DisplayData}
			
		</div>
	)
}

export default JsonDataDisplay;
