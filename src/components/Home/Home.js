import React from "react";
import Search from "./Search";
import Quicksearch from "./Quicksearch";
import Contact from "./Contact";

function Home()
{
    return(
        <>
            <Search />
            <Quicksearch />
            <Contact />
        </>
    )
}

export default Home;