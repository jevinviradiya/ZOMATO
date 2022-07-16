import React, { Component } from "react";
import { withRouter } from "react-router-dom";
const lurl = "https://zomato-api-jevin.herokuapp.com/location";
const rurl = "https://zomato-api-jevin.herokuapp.com/restro?state_id=";

class Search extends Component{
    constructor(props)
    {
        super(props);
        console.log("constructor");
        this.state={
            location:"",
            restrodata : ""
        }
    }
    renderCity = (data) =>{
        if(data){
            return data.map((item)=>{
                return (
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }
    
    handleCity = (event) => {
        let stateId = event.target.value;
        fetch(`${rurl}${stateId}`, {method : "GET"})
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({
                restrodata : data
            })
        })
    }

    renderRestro = (data) =>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name}</option>
                )
            })
        }
    }

    handleRest = (event) => {
        let restId = event.target.value;
        this.props.history.push(`/details?restId=${restId}`)
    }


    render(){
        console.log("Render", this.state.restrodata);
        return(
            
                 <section id="section2">
                    <div className="overlay">
                        <h1><i>Zomato</i></h1>
                        <p>Discover the best food & drinks in Mumbai</p>
                        <form>
                            <select id="options" onChange={this.handleCity}>
                                <option>Select City</option>
                                {this.renderCity(this.state.location)}
                            </select>
                            {/* <i className="fas fa-search icon"></i> */}
                            <select id="options" onChange={this.handleRest}>
                                <option>Select Restro</option>
                                {this.renderRestro(this.state.restrodata)}
                            </select>
                        </form>
                    </div>
                </section>
            
        )
    }
    componentDidMount()
    {
        console.log("component DidMount");
        fetch(lurl, {method: "GET"})
        .then((res)=> res.json())
        .then((data)=>{
            this.setState(
                {
                    location : data
                   
                }
            )
        })
    }
}
export default withRouter (Search);