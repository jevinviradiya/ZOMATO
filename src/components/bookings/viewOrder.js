import React, { Component } from "react";
import axios from "axios";
import BookingDisplay from "./orderDisplay";

let url = "https://zomato-api-jevin.herokuapp.com/order";

class ViewOrder extends Component{
    constructor(props)
    {
        super(props);

        this.state = {
            order : ""
        }
    }

    render()
    {
        {console.log(this.state.order)}
        return(
            <BookingDisplay orderData = {this.state.order} />
        )
    }

    componentDidMount()
    {
        axios.get(`${url}`)
        .then((res)=>{
            this.setState({
                order : res.data
            })
        })
    }
}

export default ViewOrder;