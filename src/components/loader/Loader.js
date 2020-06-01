import React from 'react'
import { 
    Container,
    Row,
    Col,
    Spinner
} from 'react-bootstrap'

const Loader= () => {
    return (
        <div className="content">
            <Container>
                        <Row>
                            <Col></Col>
                            <Col>
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </Col>
                            <Col></Col>
                        </Row>
            </Container>
        </div>
    )
}

export default Loader
