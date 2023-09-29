import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeLayoutPage from "../pages/layout/layout.page";
import ErrorPage from "../pages/error/404.error";
import AdminLayout from "../pages/layout/adminlayout.page";

import AdminPages from "../pages/cms";
import FrontPages from "../pages/front";
import { Roles } from "../config/constant";
const AdminPrivatRoute = ({component}) =>{
  let is_logged_in = true;
  if(is_logged_in===true){
    let role = Roles.ADMIN;
    if(role === "admin"){
      return component;
    }
    else{
      return <Navigate to= {"/"+role} />;
    }
  }
  else{
    return <Navigate to= "/login" />
  }
  
}
const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayoutPage />}>
          <Route path="home" element={<FrontPages.LandingPage />}></Route>
          <Route path="login" element={<FrontPages.LoginPage />}></Route>
          <Route path="register" element={<FrontPages.RegisterPage />}></Route>
          <Route path="category/:slug" element={<FrontPages.CategoryDetailPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>

        <Route path="/admin" element={<AdminPrivatRoute component={<AdminLayout />}/>}>
          <Route index element={<AdminPages.AdminDashboard />}></Route>
        </Route>
        <Route path="/seller" element={<AdminPrivatRoute component={<AdminLayout />}/>}>
          <Route index element={<AdminPages.AdminDashboard />}></Route>
        </Route>
        <Route path="/customer" element={<AdminPrivatRoute component={<AdminLayout />}/>}>
          <Route index element={<AdminPages.AdminDashboard />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
};
export default RouterComponent;