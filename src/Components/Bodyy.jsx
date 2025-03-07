import React from 'react'

function Bodyy() {
  return (
    <div>
      
    <form onSubmit={(e) => e.preventDefault()}>
      {/* Inline First Name, Last Name, and Email */}
      <div style={{ display: "flex", gap: "16px" }}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>
      <br />


      {/* Inline Country Code and Phone Number */}
      <label htmlFor="phone">Phone Number:</label>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <select id="countryCode" name="countryCode" required>
          <option value="+1">+1 (USA)</option>
          <option value="+237">+237 (Cameroon)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+91">+91 (India)</option>
          {/* Add more country codes as needed */}
        </select>
        <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
      </div>
      <br />

      {/* Single-Line Commentary Field */}
      <label htmlFor="commentary">Write a Message:</label>
      <textarea
     id="commentary"
     name="commentary"
     placeholder="Write your message here"
      rows="5"
     style={{ width: "100%" }}
      required
       ></textarea>

      <br /><br />

      <button type="submit">Submit</button>
    </form>


    </div>
  )
}

export default Bodyy;
