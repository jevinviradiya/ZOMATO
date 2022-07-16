import React from "react";

const BookingDisplay = (props) => {

    const renderTable = ({orderData}) => 
    {
        if(orderData){
            return orderData.map((item, index)=>{
                return(
                    <tr>
                        <td scope="row">{index + 1}</td>
                        <td> {item.id}</td>
                        <td> {item.hotel_name}</td>
                        <td> {item.name}</td>
                        <td> {item.email}</td>
                        <td> {item.phone}</td>
                        <td> {item.cost}</td>
                        <td> {item.address.slice(0, 20) + "..."}</td>
                    </tr>
                )
            })
        }
    }

    return(
        <>
           <div className="container">
               <center><h3>My Orders</h3></center>
               <table className="table">
                   <thead>
                       <tr>
                           <th scope="col">s.No</th>
                           <th scope="col">Order Id</th>
                           <th scope="col">Restro Name</th>
                           <th scope="col">Name</th>
                           <th scope="col">Email</th>
                           <th scope="col">phone</th>
                           <th scope="col">Cost</th>
                           <th scope="col">Address</th>
                       </tr>
                   </thead>

                   <tbody>
                       {renderTable(props)}
                   </tbody>
               </table>
           </div>
        </>
    )
}

export default BookingDisplay;