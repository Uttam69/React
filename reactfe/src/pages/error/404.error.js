import {Container, Row, Col} from 'react-bootstrap'
const ErrorPage = () =>{
    return(
        <>
        <Container>
            <Row>
                <Col className="text-danger">
                <p>
                    The page you are looking for doesnt exist.                    
                </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default ErrorPage;