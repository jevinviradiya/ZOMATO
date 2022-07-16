import React, { Component } from "react";
import axios from "axios";

const url = "https://zomato-api-jevin.herokuapp.com/filter"

class CuisineFilter extends Component{

    filterCuisine = (event) =>{
        let cuisineId = event.target.value;
        let mealId = this.props.mealId;
        let cuisineUrl = "";
        if(cuisineId === "")
        {
            cuisineUrl = `${url}/${mealId}`
        }
        else
        {
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        console.log(cuisineUrl);
        axios.get(cuisineUrl)
        .then((res) => {
        console.log("Res => ",res)
        this.props.restPerCuisine(res.data)
    })
    }


    render()
    {
        return(
            <>
               
                                                    <h2>Filter</h2>
                                                    {/* <p class="filter">Sort By</p>
                                                    <div class="option">
                                                        <label><input type="radio" /> Popularity</label> <br /><br />
                                                        <label><input type="radio" /> Rating: High to Low</label><br /><br />
                                                        <label><input type="radio" /> Delivery Time</label><br /><br />
                                                        <label><input type="radio" /> Cost: Low to High</label><br /><br />
                                                        <label><input type="radio" /> Cost: High to Low</label><br /><br />
                                                    </div>
                                                    <p class="filter">By Location</p>
                                                    <div class="option">
                                                        <label><input type="radio" /> Mumbai</label> <br /><br />
                                                        <label><input type="radio" /> Delhi</label><br /><br />
                                                        <label><input type="radio" /> Bangalore</label><br /><br />
                                                        <label><input type="radio" /> Hyderabad</label><br /><br />
                                                        <label><input type="radio" /> Chennai</label><br /><br />
                                                    </div> */}

                                                    <p class="filter">By Cuisine</p>
                                                    <div class="option" onChange={this.filterCuisine}>
                                                    <label><input type="radio" value="" name="cuisine" /> All</label><br /><br />
                                                        <label><input type="radio" value="1" name="cuisine" /> North Indian</label> <br /><br />
                                                        <label><input type="radio" value="2" name="cuisine" /> South India</label><br /><br />
                                                        <label><input type="radio" value="3" name="cuisine" /> Fast food</label><br /><br />
                                                        <label><input type="radio" value="4" name="cuisine" /> StreetFood</label><br /><br />
                                                        <label><input type="radio" value="5" name="cuisine" /> Chinese</label><br /><br />
                                                    
                                                    </div>

                                                    {/* <p class="filter">By Price</p>
                                                    <div class="option">
                                                        <label><input type="radio" /> Price Low To High</label> <br /><br />
                                                        <label><input type="radio" /> Price High To Low</label><br /><br />
                                                    
                                                    
                                                    </div> */}
                                                                            
            </>
        )
    }
}

export default CuisineFilter;