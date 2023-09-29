import HomeMenu from "../../component/home/menu/menu.component"
import { Outlet } from "react-router-dom"

const HomeLayoutPage = () =>{
    return (
        <>
        <HomeMenu/>

        <Outlet/>
        </>
    )
}
export default HomeLayoutPage;