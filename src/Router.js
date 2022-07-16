import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./components/Home/Home";
import Listing from "./components/Listing/Listing";
import RestDetail from "./components/Detail/RestDetail";
import placeOrder from "./components/bookings/placeOrder";
import ViewOrder from "./components/bookings/viewOrder";


function Routing()
{
    return(
        <BrowserRouter>
            <div>
                <Header />  
                <Route exact path="/" component={Home} />
                <Route exact path="/listing/:mealId" component={Listing} />
                <Route exact path="/details" component={RestDetail} />
                <Route exact path="/placeOrder/:restName" component={placeOrder} />
                <Route exact path="/viewBooking" component={ViewOrder} />
                <Footer />
            </div>
        </BrowserRouter>
    )    
}

export default Routing;