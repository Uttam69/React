import {Form, Col, Button} from 'react-bootstrap'
export const InputData = ({name, label, type= "text", submitChange, error}) =>{
    return (
        <>
        <Form.Group className="row-mb-3">
                <Form.Label className="col-sm-3">{label}</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type={type}
                    name={name}
                    required
                    size="sm"
                    placeholder={`Enter your ${name}`}
                    onChange={submitChange}
                    />
                    {
                      error && <span className='text-danger'>{error}</span>
                    }
                </Col>
              </Form.Group>
        </>
    )
}
export const InputFile = ({name, label, multiple= false, submitChange, error, image}) =>{
  return (
    <>
     <Form.Group className="row-mb-3">
                <Form.Label className="col-sm-3">{label}</Form.Label>
                <Col sm={3}>
                  <Form.Control
                    type="file"
                    name={name}
                    multiple= {true}
                    size="sm"
                    onChange={submitChange}
                  />
                  {
                    error && <span className='text-danger'>{error}</span>
                  }
                 </Col>
                 <Col sm={4}>
                  {
                    image &&
                     <img src={URL.createObjectURL(image)} alt='' className='img img-fluid' />
                  }
                 </Col>
                 
              </Form.Group>
             
    </>
  )
}
export const OptionMenu = ({name, label, options, submitChange, error}) =>{
  return (
    <>
    <Form.Group className="row-mb-3">
                <Form.Label className="col-sm-3">{label}</Form.Label>
                <Col sm={9}>
                  <Form.Select name={name} required size="sm"
                    onChange={submitChange} >
                    <option>--Select Any Option--</option>
                    {
                      options && options.map((item, key)=>(
                        <option value={item.value} key={key}>{item.label}</option>
                      ))
                    }
                  </Form.Select>
                  {
                    error && <span className='text-danger'>{error}</span>
                  }
                </Col>
              </Form.Group>   
    </>
  )
}
export const ButtonComponent = ({showCancel=true, label}) =>{
  return (
    <>
    <Form.Group className="row-mb-3">
                <Col className="sm-9 mt-3">
                  {
                    showCancel && 
                  <Button variant="danger" type="reset" size="sm">Cancel</Button>
                  }
                  <Button variant="success" type="submit" size="sm" className='mx-3'>{label}</Button>
                </Col>
              </Form.Group>
    </>
  )
}