import React from "react";

function Contact(){
    return(
        <>
            <div id="section4">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <img src="/mobile-app-img.webp" alt="" className="img-index" />
                </div>
                <div class="col-lg-8">
                    <h2>Get The Zomato App</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque nulla dolore reprehenderit possimus consequatur accusamus impedit adipisci atque fuga minus.</p>
                    <form>
                        <input type="text" placeholder="Enter Your Email Please" />
                        <button>Share App Link</button>
                    </form>
                    <p>Download app from</p>
                    <img class="app-download" src="/img/app-store.webp" alt="" />
                    <img class="app-download" src="/img/google-play.webp" alt="" />
                </div>
            </div>
            
           
        </div>
    </div> 
        </>
    )
}

export default Contact;