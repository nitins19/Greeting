import React from 'react';
function App()
{
    let currtime = new Date().getHours();
    let greet ='';
    let greetStyle = { };
    if (currtime >= 1 && currtime < 12) {
        greet = 'Good Morning';
        greetStyle.color = 'green';
    } 
    else if (currtime >= 12 && currtime < 16) {
        greet = 'Good Afternoon';
        greetStyle.color = 'orange';
    }
     else {
        greet = 'Good Evening';
        greetStyle.color = 'black';
    }
    return(
        <>
        <div>
        <h1> Hello Sir/Madam, < span style = { greetStyle } > { greet } </span> </h1> 
        </div> 
        </>
    );
}
export default App;