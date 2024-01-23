import React, { useState } from "react";

const App = () => {
  const [formDetails, setformDetails] = useState({
    firstName : "",
    lastName : "",
    email : "",
    country : "",
    sa : "",
    City : "",
    State : "",
    zip : "",
    comments : false,
    candidates : false,
    offers : false,
    radio : ""
})

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setformDetails((prev) => ({...prev, [name] : type === "checkbox" ? checked : value})) 
  }

  function btnHandler(event){
    event.preventDefault();
    console.log(formDetails);
  }

  return (
    <div >
      <form onSubmit={btnHandler} className="main">
      <label htmlFor="firstName">First Name</label>
      <br></br>
      <input
      name="firstName"
      id="firstName"
      type="text" 
      placeholder="John"
      value={formDetails.firstName}
      onChange={changeHandler}>
      </input>
      <br></br>

      <label htmlFor="lastName">Last Name</label>
      <br></br>
      <input
      name="lastName"
      id="lastName"
      type="text" 
      placeholder="Doe"
      value={formDetails.lastName}
      onChange={changeHandler}>
      </input>
      <br></br>

      <label htmlFor="email">E - mail</label>
      <br></br>
      <input
      name="email"
      id="email"
      type="email" 
      placeholder="Johndoe@gmail.com"
      value={formDetails.email}
      onChange={changeHandler}>
      </input>
      <br></br>

      <label htmlFor="country">Country</label>
      <br></br>
      <select
      id="country"
      name="country"
      value={formDetails.country}
      onChange={changeHandler}>
      
        <option>India</option>
        <option>Dublin</option>
        <option>London</option>
        <option>Spain</option>
      </select>

      <br></br>

      <label htmlFor="sa">Street Address</label>
      <br></br>
      <input
      name="sa"
      id="sa"
      type="text" 
      value={formDetails.sa}
      onChange={changeHandler}
      placeholder="Hno - 00, pkt 28, sec 24"
      >
      </input>
      <br></br>

      <label htmlFor="City">City</label>
      <br></br>
      <input
      name="City"
      id="City"
      type="text" 
      placeholder="Delhi"
      value={formDetails.City}
      onChange={changeHandler}>
      </input>
      <br></br>

      <label htmlFor="firstName">State / Province</label>
      <br></br>
      <input
      name="State"
      id="State"
      type="text" 
      placeholder="New Delhi"
      value={formDetails.State}
      onChange={changeHandler}>
      </input>
      <br></br>

      <label htmlFor="firstName">ZIP / Postal Code</label>
      <br></br>
      <input
      name="zip"
      id="zip"
      type="text" 
      placeholder="1100XX"
      value={formDetails.zip}
      onChange={changeHandler}>
      </input>
      <br></br>

      <fieldset>
        <legend >By Email</legend>
        <br></br>
        <div className="checkbox">
            <input
            type="checkbox"
            id="comments"
            checked={formDetails.comments}
            name="comments"
            onChange={changeHandler}>
            </input>
            <div>
            <label>Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
            </div>
        </div>

        <br></br>
        <div className="checkbox">
            <input
            type="checkbox"
            id="candidates"
            checked={formDetails.candidates}
            name="candidates"
            onChange={changeHandler}>
            </input>
            <div>
            <label>Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
            </div>
        </div>

        <br></br>
      <div className="checkbox">
      <input
              type="checkbox"
              id="offers"
              checked={formDetails.offers}
              name="offers"
              onChange={changeHandler}>
              </input>
              <div>
              <label>Offers</label>
              <p>Get notified when a candidate accepts or rejects an offer.</p>
              </div>
      </div>
      </fieldset>
<br></br>
      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered via SMS to your mobile phone.</p>

        <br></br>
        <div className="checkbox">
        <input
        type="radio"
        name="radio"
        id="everything"
        // checked={formDetails.radio === "everything"}
        value="everything"
        onChange={changeHandler}
        >
        </input>
        <label htmlFor="everything">Everything</label>
        </div>
           <div className="checkbox">
            
        <input
        type="radio"
        name="radio"
        id="same"
        // checked={formDetails.radio === "same"}
        value="Same as email"
        onChange={changeHandler}
        >
        </input>
        <label htmlFor="same">Same as email</label>
        
           </div>

        <div className="checkbox"> 
        <input
        type="radio"
        name="radio"
        id="nopush"
        // checked={formDetails.radio === "nopush"}
        value="No push notifications"
        onChange={changeHandler}
        >
        </input>
        <label htmlFor="nopush">No push notifications</label>
  
</div>
              <br></br>
      </fieldset>

      <button>Save</button>

    </form>
    </div>
  );
};

export default App;
