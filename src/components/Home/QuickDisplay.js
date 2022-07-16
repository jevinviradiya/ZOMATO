import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function QuickDisplay(props)
{
    const listMeal = ({mealData}) => {
        if(mealData)
        {
            return mealData.map((item)=>{
                return (
                    <div className="col-lg-3">
                        
                        <Link to={`/listing/${item.meal_id}`} key={item.meal_type}>

                            <div className="box">
                            <a href="listing.html"><img src={item.meal_image} alt="" /></a> 
                            <p><a href="listing.html">{item.meal_type}</a></p> 
                            </div>

                        </Link>
                        
                    </div>
                )
            })
        }
    }
    return(
        <>
            {listMeal(props)}
        </>
    )
}

export default QuickDisplay;