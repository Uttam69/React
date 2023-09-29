import { NavDropdown } from "react-bootstrap"
const DropDownMenu = ({data, id}) =>{
  return(
    <>
    <NavDropdown title={data.title} id={id}>
      {
        data.data && data.data.map((item, index) =>(

          <NavDropdown.Item key={index} href={item.slug}>{item.name}</NavDropdown.Item>
        ))
      }
    </NavDropdown>
    </>
  )
}
export default DropDownMenu;