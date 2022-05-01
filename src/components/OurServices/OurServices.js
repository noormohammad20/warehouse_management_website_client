import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import svg1 from '../../images/img1.svg'
import svg2 from '../../images/img2.svg'


const OurServices = () => {
    return (

        <Row className='bg-light '>

            <Col sm={12}>
                <Card
                    style={{ backgroundColor: "#fff4ed" }}
                    className='container rounded rounded-pill'>
                    <Card.Img style={{ height: '120px' }} variant="top" src={svg1} />
                    <Card.Body>
                        <Card.Title
                            style={{ fontSize: '25px' }}
                            className='text-center text-success'>Easy sales tracking</Card.Title>
                        <Card.Text
                            style={{ fontSize: '18px' }}
                            className='text-center'>
                            Our free inventory tracking website keeps track of your entire sales activity right from adding contacts of your leads and prospects, creating sales orders, invoices, and managing sales on online marketplaces.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} className='g-3' >
                <Card style={{ backgroundColor: "#fff4ed" }} className='container rounded rounded-pill'>
                    <Card.Img style={{ height: '120px' }} variant="top" src={svg2} />
                    <Card.Body>
                        <Card.Title
                            style={{ fontSize: '25px' }}
                            className='text-center text-primary'>Easy sales tracking</Card.Title>
                        <Card.Text
                            style={{ fontSize: '18px' }}
                            className='text-center'>
                            Even if you have multiple warehouses in different locations, you can manage orders and warehouse transfers of stock from a single system. This way you can control the movement of the items without consuming a lot of time.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    )
}

export default OurServices