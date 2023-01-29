
import React, { useState } from "react";
import { Notifications } from 'react-push-notification';
import addNotification from 'react-push-notification';
const Trial = () =>{
    const [name,setName] = useState("");
  
    function warningNotification (){
      addNotification({
        title: 'Warning',
        subtitle: 'Please fill it',
        message: 'You have to enter name',
        theme: 'red',
        closeButton:"X",
      })
    };
    
    function successNotification (){
      addNotification({
        title: 'Success',
        subtitle: 'You have successfully submitted',
        message: 'Welcome to GeeksforGeeks',
        theme: 'light',
        closeButton:"X",
        backgroundTop:"green",
        backgroundBottom:"yellowgreen"
      })
    };
    
    function handleSubmit(e){
      e.preventDefault();
      if(name === "")
        warningNotification();
      else
        successNotification()
    }
     
    return (
      <div className="App">
        <Notifications />
        <h1>Hey Geek!</h1>
        
          <button onClick={successNotification} 
            type="submit">Submit
          </button>
      </div>
    );
}

export default Trial