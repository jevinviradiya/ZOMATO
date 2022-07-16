import React, { Component } from "react";
import QuickDisplay from "./QuickDisplay";

const url = "https://zomato-api-jevin.herokuapp.com/mealtype";

class Quicksearch extends Component{

    constructor()
    {
        super()
        this.state={
            mealType : ""
        }
    }



    render()
    {
        return(
            <>
               <div id="section3">
                    
                    <div className="container">
                        <h2>Quick Search</h2>
                        <p>Discover Restaurant By Meal</p>
                        <div className="row">
                            {/* <div className="col-lg-3">
                                <div className="box">
                                <a href="listing.html"><img src="img/foodImages/food1.jpg" alt="" /></a> 
                                <p><a href="listing.html">Food Category 1</a></p> 
                                </div>
                            </div> */}
                            <QuickDisplay mealData = {this.state.mealType} />
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }



    
    componentDidMount(){
        fetch(url, {method : "GET"})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState(
                {mealType : data}
            )
        })
    }
}
export default Quicksearch;