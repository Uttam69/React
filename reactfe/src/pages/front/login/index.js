import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const LoginPage = () => {
  let [data, setData] = useState({
    username: "",
    password: "",
  });
  let [err, setErr] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) =>{
    let {name, value} = e.target;
    setData({
      ...data,
      [name]: value
    })
    validateData(name, value)
  }
  const validateData = (field, value) =>{
    let msg='';
    switch(field){
      case "username":
        msg= value? "" : "Username is required"
        break;
      case "password":
        msg= value? (value.length<8? "Should be more than 8 character": '') : "Password is required"
        break;
        default:
    }
    setErr({
      ...err,
      [field]: msg
    })

  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    //TODO: api call for login
    console.log(data);
  }
  
  return (
    <>
      <Container>
        <Row className="my-3">
          <Col className="text-center">
            <h4>Login</h4>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">
                  Enter Your Email:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="username"
                    name="username"
                    size="sm"
                    required
                    placeholder="Enter Your Email"
                    onChange={handleChange}
                    />
                     {
                    err && err.username &&
                    <span className="text-danger">{err.username}</span>
                  }

                </Col>
              </Form.Group>

              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3">
                  Enter Your password:
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="password"
                    name="password"
                    size="sm"
                    required
                    placeholder="Enter Your Password"
                    onChange={handleChange}
                  />
                  {
                    err && err.password &&
                    <span className="text-danger">{err.password}</span>
                  }
                </Col>
              </Form.Group>
              <Form.Group className="row mb-3">
                <Col className="offset-3">
                  <Button variant="danger" type="reset" size="sm">
                    Cancel
                  </Button>
                  <Button
                    variant="success"
                    type="submit"
                    size="sm"
                    className="mx-3"
                  >
                    Submit
                  </Button>
                </Col>
              </Form.Group>
            </Form>
            <p>or</p>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>


           </Col>
        </Row>
      </Container>
    </>
  );
};
export default LoginPage;