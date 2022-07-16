import React, { Component } from "react";
import axios from "axios";

const url = "https://zomato-api-jevin.herokuapp.com/filter"

class CostFilter extends Component{

    filterCost = (event) =>{
        let cost = (event.target.value).split("-");
        let lcost = cost[0];
        let hcost = cost[1];
        let mealId = this.props.mealId;
        let costUrl = "";
        if(event.target.value === "")
        {
            costUrl = `${url}/${mealId}`
        }
        else
        {
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`;
        }
        console.log(costUrl);
        axios.get(costUrl)
        .then((res) => {
        console.log("Res => ",res)
        this.props.restPerCost(res.data)
    })
    }


    render()
    {
        return(
            <>
            
               
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

                                                    <p class="filter">By Cost</p>
                                                    <div class="option" onChange={this.filterCost}>
                                                    <label><input type="radio" value="" name="cuisine" /> All</label><br /><br />
                                                        <label><input type="radio" value="100-300" name="cuisine" /> 100-300</label> <br /><br />
                                                        <label><input type="radio" value="301-500" name="cuisine" /> 301-500</label><br /><br />
                                                        <label><input type="radio" value="501-700" name="cuisine" /> 501-700</label><br /><br />
                                                        <label><input type="radio" value="701-900" name="cuisine" /> 701-900</label><br /><br />
                                                        <label><input type="radio" value="900-3000" name="cuisine" /> 901-3000</label><br /><br />
                                                    
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

export default CostFilter;