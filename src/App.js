import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { Route, Switch } from "react-router";
//import signupApi from "./api/signupApi";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NotFound from "./Page/404/index";
import AllProduct from "./Page/AllProduct/index";
import Blog from "./Page/Blog";
import BodyCare from "./Page/BodyCare";
import Cart from "./Page/Cart/index";
import Contact from "./Page/Contact";
import DetailProduct from "./Page/DetailProduct";
import HairCare from "./Page/HairCare/index";
// import AOS from 'aos';
// import "aos/dist/aos.css";
import Home from "./Page/Home/index";
import Makeup from "./Page/MakeUp/index";
import OrderStatus from "./Page/OrderStatus/index";
import SkinCare from "./Page/SkinCare/index";
//import Detail from './components/Detail'
function App() {


 

  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} exact />
        <Route path="/bodycare" component={BodyCare} exact />
        <Route path="/cart" component={Cart} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/haircare" component={HairCare} exact />
        <Route path="/makeup" component={Makeup} exact />
        <Route path="/skincare" component={SkinCare} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/detail" component={DetailProduct} exact />
        <Route path="/detail/:id" component={DetailProduct} exact />
        <Route path="/allproduct" component={AllProduct} exact />
        <Route path="/orderstatus" component={OrderStatus} exact />
        <Route path="/:id" component={NotFound} />
      </Switch>
      <MessengerCustomerChat pageId="100244785808927" appId="404801124635752" />
    </div>
  );
}

export default App;
