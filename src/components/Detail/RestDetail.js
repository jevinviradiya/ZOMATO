import React, { Component } from 'react';
import axios from 'axios';
import MenuDisplay from './menuDisplay';
import "./singlepage.css"


const url = "https://zomato-api-jevin.herokuapp.com/detail";
const menuurl = "https://zomato-api-jevin.herokuapp.com/menu";

class RestDetail extends Component{
    constructor()
    {
        super()
            this.state={
                details : "",
                mealData : "",
                userItem: ""
            }
    }

    addtoCart = (data) => {
        this.setState(
            {
                userItem : data
                //when we click on proceed we sav e this data in session storage and then go to the next page
            }
        )
    }

    proceed = () =>{
        sessionStorage.setItem("menu", this.state.userItem)
        this.props.history.push(`/placeorder/${this.state.details.restaurant_name}`);
    }



    render()
    {
        return(
            <>
                <section className='restDetail'>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5">
                                <div class="image">
                                    <img src="img/foodImages/food5.webp" alt="food5"  width="100%" />
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div class="productinfo">
                                    <div class="content">
                                        <h2>{this.state.details.restaurant_name}</h2>
                                        <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat totam velit illum, blanditiis fugit aut! Natus maxime minima ut aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima rerum facilis pariatur eos dolores odio aspernatur aut sit quaerat ipsa error eum asperiores amet dolore repudiandae possimus distinctio, ad accusantium.   </p>
                                        <h3>&#8377; {this.state.details.cost}</h3>
                                        <p class="opentime"><b>Open Now : </b>7am – 4am (Today)
                                        </p>
                                        <span class="rating">{this.state.details.average_rating}</span>
                                        <div class="links">
                                            <a href="" style={{backgroundColor: "#FF9F00"}}>Add To Cart</a>
                                            <a href="" onClick={this.proceed} style={{backgroundColor: "#FB641B"}}>proceed</a>
                                        </div>
                                    </div>
                    
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <MenuDisplay menudata = {this.state.mealData} finalorder={(data)=>{this.addtoCart(data)}} />
                
            </>
            
        )
    }

    async componentDidMount()
    {
        let restId = this.props.location.search.split("=")[1];
        let response = await axios.get(`${url}/${restId}`)
        let menuresponse = await axios.get(`${menuurl}/${restId}`)
        this.setState(
            {
                details: response.data[0],
                mealData : menuresponse.data
            }
        )
        console.log("mealData", this.state.mealData)
    }
}

export default RestDetail;