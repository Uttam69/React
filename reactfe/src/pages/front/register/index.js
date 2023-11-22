import { ButtonComponent, InputData, InputFile, OptionMenu } from "../../../component/common/Input/input.component";
import { Form, Container, Row, Col } from "react-bootstrap";
import {useFormik} from "formik";
import * as Yup from "yup";
import { httpPostRequest } from "../../../services/axios.services";

const RegisterPage = () => {
  let defaultValues= {
    name: '',
    email: '',
    password: '',
    role: '',
    image: '',
  }
  let validationSchema = Yup.object().shape({
    name: Yup
            .string()
            .required("Name is required")
            .min(2, "Name should be longer than 2 character"),
    email: Yup
            .string()
            .email("Inavlid Email Format")
            .required("Email is required"),
    password: Yup 
               .string()
               .required("Password is required")
               .min(8, "Password should be longer than 8 character")
               .max(15, "Password should be shorter than 15 character"),
    role: Yup
             .string()
             .required("Role is required")
  })
  const formik = useFormik({
    initialValues : defaultValues,
    validationSchema: validationSchema,
    onSubmit : async (value) =>{
      let result= await httpPostRequest('/rapidapi.com', value, false, true)
      console.log(result);
     
    }
  })
  const fileHandle = (e) =>{
    let files= e.target.files[0]
    let size= files.size
    let ext = files.name.split(".").pop("")
    let allowed = ['jpeg', 'jpg', 'png', 'bmp', 'svg', 'gif', 'webp']
    if(size<=200000){
      if(allowed.includes(ext)){
        formik.setValues({
          ...formik.values,
          image: files
        })
      }
      else{
        formik.setErrors({
          ...formik.errors,
          image: "Invalid Format"
        })
      }
    }
    else{
      formik.setErrors({
        ...formik.errors,
        image: "Size should be less than 2MB"
      })

    }

  }
  console.log("Formik:", formik)    
  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col className="text-center sm-3">
            <h1>Register</h1>
          </Col>
        </Row>

        <Row>
          <Col className="sm-12">
            <Form onSubmit={formik.handleSubmit}>
                <InputData 
                name="name"
                label={"Name:"}
                submitChange={formik.handleChange}
                error={formik.errors.name}
                /> 
          
                <InputData 
                name="email"
                label={"Email:"}
                submitChange={formik.handleChange}
                error={formik.errors.email}
                /> 

                <InputData 
                name="password"
                label={"Password :"}
                submitChange={formik.handleChange}
                error={formik.errors.password}
                />
                
                <OptionMenu 
                name="role"
                label={"Role:"}
                options={[
                  {label:"Seller", value:"seller"},
                  {label:"Customer", value:"customer"},
                ]}
                submitChange={formik.handleChange}
                error={formik.errors.role}
                />

                <InputFile 
                name="image"
                label={"Image:"}
                submitChange={fileHandle}
                error={formik.errors.image}
                image={formik.values.image}/>
  
                <ButtonComponent 
                showCancel={false}
                label={"Register"}
                /> 
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default RegisterPage;