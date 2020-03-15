import React from "react";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';


function UserForm(){
      return (
        <form>
        {/* <span className="formtext">&#x3C;Form /&#x3E;</span> */}
          <input 
            type="text" 
            placeholder="Enter a user name" 
            required 
          />
           <input 
            type="text" 
            placeholder="Enter a password" 
            required 
          />
          <button>Sign Up</button>
        </form>
      );
    }
  

export default UserForm;