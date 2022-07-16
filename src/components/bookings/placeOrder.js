import React, { Component } from "react";

const url = "https://zomato-api-jevin.herokuapp.com/menuItem";
const postData = "https://zomato-api-jevin.herokuapp.com/placeorder";

class placeOrder extends Component{
    constructor(props){
        super(props)

        this.state ={
            id : Math.floor(Math.random()*100000),
            hotel_name : this.props.match.params.restName,
            name : "",
            email : "",
            cost : 0,
            phone : "",
            address : "Punjab",
            menuItem : ""
        }
    }
    renderMenu = (data) =>{
        if(data) {
            return data.map((item)=> {
                return (
                    <div className="orderItems" key={item.menu_id}>
                        <img className="productImage" src={item.menu_image} />
                        <div className="content">
                             <h3>{item.menu_name.slice(0,20) + "..."}</h3>
                             <p>{item.description}</p>
                             <p className="productPrice">Price : <b>{item.menu_price}</b></p>
                        </div>
                    </div>
                )
            })
        }
    }

    handleChange = (event) => {
        this.setState(
            {
                [event.target.name ] : event.target.value
            }
        )
    }

    checkout = () =>{
        let obj = this.state;
        obj.menuItem = sessionStorage.getItem("menu");
        fetch(postData,{
            method : "POST",
            headers : {
                "accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(obj)
        })
        .then(this.props.history.push("/viewBooking"))
    }

    render()
    {
        return(
        <div className="container" >
            <hr />
            <div className="form_heading">
                <h3>Your order from Restro <b>{this.state.hotel_name}</b></h3>
                <h4>Total order of Rupees : <b>{this.state.cost}</b></h4>
            </div>
            <hr />
            <div className="form-body">
                <form>
                    <input type="text" className="inputfield" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <input type="text" className="inputfield" name="address" value={this.state.address} onChange={this.handleChange}/>
                    <input type="text" className="inputfield" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <input type="text" className="inputfield" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                    <input type="submit" className="form-button" value="Send Details" onClick={this.checkout}/>
                </form>
            </div>
            <hr />
            <h3>Seclected Items</h3>
            <div className="selectItems">
                {this.renderMenu(this.state.menuItem)}
            </div>
        </div>
        
        )
    }

    componentDidMount()
    {
        let menuItem = sessionStorage.getItem("menu");
        // console.log("menu", menuItem);
        let orderId = [];
        menuItem.split(",").map((item)=>{
            orderId.push(parseInt(item))
        })
        // console.log("order in array", orderId);
        fetch(url,
            {
                method : "POST",
                headers : {
                    "accept" : "application/json",
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(orderId)
            })
            .then((res)=>res.json())
            .then((data)=>{
                let totalPrice = 0;
                data.map((item)=>{
                    totalPrice += parseInt(item.menu_price)
                })

            this.setState({cost : totalPrice, menuItem : data})
            })
    }

}

export default placeOrder;