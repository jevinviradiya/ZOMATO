import React, { Component } from "react";

class Header extends Component{
    render(){
        return(

            <nav>
                <input type="checkbox" id="check" />
                <label for="check"><i class="fas fa-bars"></i></label>
                <span><a href="/#"><i>Zomato</i></a></span>
                <ul>
                    <li><a href="#">Add Restaurant</a></li>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li id="mode">Dark Mode</li>
                </ul>
            </nav>
            )
    }
}
export default Header;